"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

/** shared scroll progress for the section, 0 at entry, 1 at exit */
export type Progress = { current: number };

const CAT = "/media/cat.webp";
// warm the cache so the cat is in the very first frame instead of popping in
useLoader.preload(THREE.TextureLoader, CAT);

/** deterministic PRNG — the field must be identical on every render */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ------------------------------------------------------------------ nebula */

const NEBULA_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const NEBULA_FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uProgress;
  uniform vec2  uAspect;

  // value noise + fbm
  vec2 hash(vec2 p){
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(dot(hash(i + vec2(0.0,0.0)), f - vec2(0.0,0.0)),
                   dot(hash(i + vec2(1.0,0.0)), f - vec2(1.0,0.0)), u.x),
               mix(dot(hash(i + vec2(0.0,1.0)), f - vec2(0.0,1.0)),
                   dot(hash(i + vec2(1.0,1.0)), f - vec2(1.0,1.0)), u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 6; i++) { v += a * noise(p); p *= 2.04; a *= 0.5; }
    return v;
  }

  void main(){
    vec2 uv = (vUv - 0.5) * uAspect;
    float t = uTime * 0.014;

    // two drifting cloud layers, the second warped by the first
    vec2 q = vec2(fbm(uv * 1.6 + t), fbm(uv * 1.6 + vec2(3.2, 1.7) - t));
    float f = fbm(uv * 2.1 + q * 1.9 + vec2(t * 1.6, -t));
    float clouds = smoothstep(-0.12, 0.62, f);

    vec3 deep   = vec3(0.027, 0.024, 0.047);
    vec3 violet = vec3(0.30,  0.13,  0.72);
    vec3 lilac  = vec3(0.62,  0.42,  1.00);
    vec3 ember  = vec3(0.86,  0.15,  0.20);

    vec3 col = deep;
    col = mix(col, violet, clouds * 0.72);
    col = mix(col, lilac,  pow(clouds, 3.4) * 0.5);

    // the fire the tear let through, low and to one side
    float glow = smoothstep(0.85, 0.0, length(uv - vec2(-0.55, -0.42)));
    col += ember * glow * 0.16 * (0.6 + 0.4 * sin(uTime * 0.7));

    // deepen toward the edges so the section reads as a volume, not a wall
    float vig = smoothstep(1.5, 0.15, length(uv));
    col *= 0.35 + 0.65 * vig;

    // brighten slightly as the visitor travels through
    col *= 0.82 + uProgress * 0.4;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function Nebula({ progress }: { progress: Progress }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const [uniforms] = useState(() => ({
    uTime: { value: 0 },
    uProgress: { value: 0 },
    uAspect: { value: new THREE.Vector2(1, 1) },
  }));

  useFrame((_, dt) => {
    const u = mat.current?.uniforms;
    if (!u) return;
    u.uTime.value += dt;
    u.uProgress.value += (progress.current - u.uProgress.value) * 0.06;
    u.uAspect.value.set(Math.max(1, viewport.aspect), Math.max(1, 1 / viewport.aspect));
  });

  return (
    <mesh position={[0, 0, -14]}>
      <planeGeometry args={[viewport.width * 3.4, viewport.height * 3.4]} />
      <shaderMaterial
        ref={mat}
        vertexShader={NEBULA_VERT}
        fragmentShader={NEBULA_FRAG}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}

/* --------------------------------------------------------------- starfield */

function Stars({
  count,
  depth,
  size,
  speed,
  progress,
}: {
  count: number;
  depth: number;
  size: number;
  speed: number;
  progress: Progress;
}) {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const rand = mulberry32(count * 7919 + Math.round(depth * 131));
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (rand() - 0.5) * 34;
      pos[i * 3 + 1] = (rand() - 0.5) * 26;
      pos[i * 3 + 2] = -depth - rand() * 6;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, [count, depth]);

  useFrame((state, dt) => {
    const p = points.current;
    if (!p) return;
    // constant drift, plus depth pulled by the scroll — nearer layers move more
    p.position.x -= dt * speed;
    if (p.position.x < -17) p.position.x += 17;
    p.position.z = progress.current * (14 - depth) * 0.9;
    const { x, y } = state.pointer;
    p.rotation.y += (x * 0.05 - p.rotation.y) * 0.02;
    p.rotation.x += (-y * 0.03 - p.rotation.x) * 0.02;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={size}
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ------------------------------------------------------------- cat portal */

/**
 * The cat plate is black-on-black with a red rim. Drawn additively, every dark
 * pixel contributes nothing and the rim burns straight into the nebula — so it
 * sits *in* the space instead of on a card in front of it.
 */
function CatPortal({ progress }: { progress: Progress }) {
  const group = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, CAT);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    g.position.y = Math.sin(t * 0.5) * 0.16;
    g.position.z = -2 + progress.current * 5.5;
    g.rotation.z = Math.sin(t * 0.3) * 0.012;
    const { x, y } = state.pointer;
    g.rotation.y += (x * 0.16 - g.rotation.y) * 0.05;
    g.rotation.x += (-y * 0.1 - g.rotation.x) * 0.05;
    // a slow breath on the rim
    const m = g.children[0] as THREE.Mesh;
    const mat = m.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.86 + Math.sin(t * 1.1) * 0.09;
    void dt;
  });

  return (
    <group ref={group}>
      <mesh>
        <planeGeometry args={[10.4, 5.85]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* -------------------------------------------------------------------- rig */

function Rig({ progress }: { progress: Progress }) {
  useFrame((state) => {
    const cam = state.camera;
    // travel forward through the field as the section scrolls
    cam.position.z += (9 - progress.current * 4.6 - cam.position.z) * 0.05;
    cam.position.x += (state.pointer.x * 0.5 - cam.position.x) * 0.03;
    cam.position.y += (state.pointer.y * 0.32 - cam.position.y) * 0.03;
    cam.lookAt(0, 0, 0);
  });
  return null;
}

export function SpaceScene({ progress }: { progress: Progress }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 9], fov: 55 }}
      style={{ position: "absolute", inset: 0 }}
      // paint one frame immediately, so the shaft is never briefly empty
      onCreated={({ gl, scene, camera }) => gl.render(scene, camera)}
    >
      <color attach="background" args={["#050409"]} />
      <Nebula progress={progress} />
      <Stars count={900} depth={11} size={0.045} speed={0.16} progress={progress} />
      <Stars count={520} depth={7} size={0.075} speed={0.34} progress={progress} />
      <Stars count={220} depth={3.5} size={0.12} speed={0.6} progress={progress} />
      {/* the texture load suspends, so it needs its own boundary */}
      <Suspense fallback={null}>
        <CatPortal progress={progress} />
      </Suspense>
      <Rig progress={progress} />
    </Canvas>
  );
}
