// Knock the black backdrop out of the pixel avatars + cut a square head crop.
// Run: node scripts/make-avatars.mjs
import sharp from "sharp";
import { stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (...p) => join(root, "public", ...p);

const report = async (out) => {
  const m = await sharp(out).metadata();
  const { size } = await stat(out);
  console.log(
    out.split(/[\\/]/).pop().padEnd(16),
    `${m.width}x${m.height}`.padEnd(12),
    `${Math.round(size / 1024)}KB`,
  );
};

/** Make near-black pixels transparent, trim the border, ship as lossless WebP. */
async function cutout(src, out, threshold = 26, width = 720) {
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] < threshold && data[i + 1] < threshold && data[i + 2] < threshold) {
      data[i + 3] = 0;
    }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 1 })
    .resize({ width, withoutEnlargement: true, kernel: "nearest" })
    .webp({ quality: 88, alphaQuality: 100, effort: 6 })
    .toFile(out);
  await report(out);
}

/** Square crop around the head/shoulders of the front avatar. */
async function head(src, out) {
  const m = await sharp(src).metadata();
  const size = Math.round(m.width * 0.46);
  await sharp(src)
    .extract({
      left: Math.round(m.width / 2 - size / 2),
      top: Math.round(m.height * 0.145),
      width: size,
      height: size,
    })
    .resize(384, 384, { kernel: "nearest" })
    .webp({ quality: 88, alphaQuality: 100, effort: 6 })
    .toFile(out);
  await report(out);
}

await cutout(P("me", "front.jpg"), P("me", "front-cut.webp"));
await cutout(P("me", "back.jpg"), P("me", "back-cut.webp"));
await cutout(P("me", "side.png"), P("me", "side-cut.webp"), 26, 420);
await head(P("me", "front.jpg"), P("me", "head.webp"));
