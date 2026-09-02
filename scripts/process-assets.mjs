// Asset pipeline: raw drops in /assets-raw  ->  optimized web assets in /public
// Run: node scripts/process-assets.mjs
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const RAW = join(root, "assets-raw");
const PUB = join(root, "public");
const ff = (args) => execFileSync(ffmpegPath, ["-y", "-hide_banner", "-loglevel", "error", ...args], { stdio: "inherit" });
const ensure = (d) => { if (!existsSync(d)) mkdirSync(d, { recursive: true }); };
const raw = (f) => join(RAW, f);

// ---- logo slugs: raw filename -> { slug, name, kind } ----------------------
const LOGOS = [
  ["Flag_swaying_on_castle_logo_202609030234.mp4", "castle-flag", "Castle Flag"],
  ["Fluidra_logo_ripples_water_1080p_202609030234.mp4", "fluidra", "Fluidra"],
  ["Geometric_fox_logo_blinking_1080p_202609030234.mp4", "geo-fox", "Geometric Fox"],
  ["Heron_logo_flapping_wings_1080p_202609030234.mp4", "heron", "Heron"],
  ["Hexagonal_shapes_pulsing_subtly_1080p_202609030234.mp4", "hexagon", "Hexagon"],
  ["Impossible_triangle_lines_rotating_1080p_202609030234.mp4", "penrose", "Penrose"],
  ["Interlocking_letters_shifting_sl…_1080p_202609030233.mp4", "interlock", "Interlock"],
  ["Leaf_sways_on_letter_L_202609030233.mp4", "leaf-l", "Leaf L"],
  ["Letter_logo_assembles_pieces_1080p_202609030234.mp4", "assemble", "Assemble"],
  ["Lion_head_shield_animation_1080p_202609030234.mp4", "lion-shield", "Lion Shield"],
  ["Octopus_tentacles_moving_in_place_202609030234.mp4", "octopus", "Octopus"],
  ["Oculis_logo_blinking_and_shimmering_202609030234.mp4", "oculis", "Oculis"],
  ["Star_icon_twinkles_on_logo_202609030234.mp4", "star-icon", "Star Icon"],
  ["Stars_shimmering_on_mountain_logo_202609030233.mp4", "altivia", "Altivia"],
  ["Stenciled_letters_shifting_slightly_1080p_202609030234.mp4", "stencil", "Stencil"],
  ["Stylized_letter_design_sways_1080p_202609030234.mp4", "vyrncx", "Vyrncx"],
  ["Generate_ninth_minimalist_logo_mark_202609030234.jpeg", "mark-09", "Mark 09"],
  ["Generate_nineteenth_minimalist_l…_2K_202609030234.jpeg", "mark-19", "Mark 19"],
];

// crop to centered square from the sides only, keep full height
const SQ_CROP = "crop='min(iw,ih)':'min(iw,ih)':(iw-min(iw\\,ih))/2:(ih-min(iw\\,ih))/2";

function logoVideo(src, slug) {
  const out = join(PUB, "logos", `${slug}.mp4`);
  ff(["-i", raw(src), "-an", "-vf", `${SQ_CROP},scale=720:720,fps=24`,
    "-c:v", "libx264", "-profile:v", "high", "-pix_fmt", "yuv420p", "-crf", "26",
    "-movflags", "+faststart", out]);
  ff(["-i", out, "-frames:v", "1", "-q:v", "4", join(PUB, "logos", `${slug}.jpg`)]);
}
async function logoImage(src, slug) {
  const meta = await sharp(raw(src)).metadata();
  const s = Math.min(meta.width, meta.height);
  await sharp(raw(src))
    .extract({ left: Math.round((meta.width - s) / 2), top: Math.round((meta.height - s) / 2), width: s, height: s })
    .resize(720, 720).webp({ quality: 82 })
    .toFile(join(PUB, "logos", `${slug}.webp`));
}

// ---- ambient clips (16:9, keep frame, strip audio) ------------------------
function ambient(src, slug, { w = 1280, fps = 24, crf = 27, poster = true } = {}) {
  const out = join(PUB, "media", `${slug}.mp4`);
  ff(["-i", raw(src), "-an", "-vf", `scale=${w}:-2,fps=${fps}`,
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", String(crf),
    "-movflags", "+faststart", out]);
  if (poster) ff(["-i", out, "-frames:v", "1", "-q:v", "4", join(PUB, "media", `${slug}.jpg`)]);
}

async function main() {
  ["logos", "media", "me"].forEach((d) => ensure(join(PUB, d)));

  for (const [file, slug] of LOGOS) {
    if (!existsSync(raw(file))) { console.warn("MISSING", file); continue; }
    console.log("logo:", slug);
    if (file.endsWith(".mp4")) logoVideo(file, slug);
    else await logoImage(file, slug);
  }

  ambient("Black_cat_sitting_in_space_202609030330 (1).mp4", "cat");
  // the flame clip only ever shows through a thin crack, so it can be small
  ambient("Electric_purple_flames_burning_u_202609030346.mp4", "flames", {
    w: 640, fps: 20, crf: 30, poster: false,
  });

  // polaroid: this source has no alpha, so it is cropped and shown on a dark panel
  ff(["-i", raw("Polaroid_photo_slides_from_camera_202609030310-Picsart-BackgroundRemover.webm"),
    "-an", "-vf", "crop=iw:ih*0.72:0:ih*0.14,scale=560:-2",
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "26", "-movflags", "+faststart",
    join(PUB, "media", "polaroid.mp4")]);
  ff(["-i", join(PUB, "media", "polaroid.mp4"), "-frames:v", "1", "-q:v", "3",
    join(PUB, "media", "polaroid.jpg")]);

  // pixel avatar sources — scripts/make-avatars.mjs turns these into the web versions
  for (const [src, dst] of [
    ["Ameen Front.jpeg", "front.jpg"], ["Ameen Back.jpeg", "back.jpg"], ["Ameen Side.png", "side.png"],
  ]) copyFileSync(raw(src), join(PUB, "me", dst));

  console.log("done — now run: node scripts/make-avatars.mjs");
}
main();
