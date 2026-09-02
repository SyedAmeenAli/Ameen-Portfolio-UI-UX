/**
 * Procedural sound effects, synthesised with the Web Audio API.
 * No audio files: every cue is generated, so there is nothing extra to download.
 *
 * Silent until the visitor turns sound on (see components/sound-toggle.tsx) —
 * the AudioContext is only created after that gesture.
 */

export type Cue =
  | "hover"
  | "click"
  | "glow"
  | "tear"
  | "flame"
  | "shutter"
  | "whoosh"
  | "open"
  | "close";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let enabled = false;
let noise: AudioBuffer | null = null;
let lastAt = 0;
let restored = false;

const listeners = new Set<() => void>();

function ready(): boolean {
  if (!enabled || typeof window === "undefined") return false;
  if (!ctx) {
    const AC =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.34;
    master.connect(ctx.destination);

    // one second of white noise, reused by every noise-based cue
    const len = ctx.sampleRate;
    noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = noise.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === "suspended") void ctx.resume();
  return true;
}

/** short tonal blip */
function tone(
  freq: number,
  dur: number,
  type: OscillatorType,
  gain: number,
  slideTo?: number,
) {
  if (!ctx || !master) return;
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain, t + 0.006);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(master);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

/** filtered noise burst — paper, fire, air */
function hiss(
  dur: number,
  gain: number,
  from: number,
  to: number,
  q = 1,
  type: BiquadFilterType = "bandpass",
) {
  if (!ctx || !master || !noise) return;
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = noise;
  const filter = ctx.createBiquadFilter();
  filter.type = type;
  filter.Q.value = q;
  filter.frequency.setValueAtTime(from, t);
  filter.frequency.exponentialRampToValueAtTime(to, t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain, t + dur * 0.18);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(filter).connect(g).connect(master);
  src.start(t);
  src.stop(t + dur + 0.02);
}

export function play(cue: Cue) {
  if (!ready() || !ctx) return;

  // hover fires constantly — throttle so it never turns into a buzz
  if (cue === "hover") {
    const now = ctx.currentTime;
    if (now - lastAt < 0.06) return;
    lastAt = now;
  }

  switch (cue) {
    case "hover":
      tone(1520, 0.05, "sine", 0.05);
      break;
    case "click":
      tone(880, 0.07, "square", 0.09, 440);
      break;
    case "glow":
      tone(660, 0.22, "triangle", 0.07, 1180);
      break;
    case "tear":
      hiss(0.42, 0.16, 5200, 700, 0.9);
      break;
    case "flame":
      hiss(0.7, 0.11, 900, 260, 0.6, "lowpass");
      break;
    case "shutter":
      tone(2100, 0.03, "square", 0.1);
      hiss(0.16, 0.2, 4200, 900, 2);
      break;
    case "whoosh":
      hiss(0.55, 0.14, 320, 3200, 0.8);
      break;
    case "open":
      tone(520, 0.18, "triangle", 0.08, 940);
      hiss(0.22, 0.07, 3000, 900, 1);
      break;
    case "close":
      tone(940, 0.16, "triangle", 0.07, 460);
      break;
  }
}

export function setEnabled(on: boolean) {
  enabled = on;
  restored = true;
  if (typeof window !== "undefined") {
    localStorage.setItem("sound", on ? "1" : "0");
  }
  if (on) {
    ready();
    play("glow");
  } else if (ctx?.state === "running") {
    void ctx.suspend();
  }
  listeners.forEach((l) => l());
}

export function isEnabled() {
  return enabled;
}

/** useSyncExternalStore subscribe */
export function subscribe(l: () => void) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

/** useSyncExternalStore snapshot — reads the saved preference on first call */
export function getSnapshot() {
  if (!restored && typeof window !== "undefined") {
    restored = true;
    enabled = localStorage.getItem("sound") === "1";
  }
  return enabled;
}

export function getServerSnapshot() {
  return false;
}
