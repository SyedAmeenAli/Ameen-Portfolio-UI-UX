# Ameen Ali — UI/UX Portfolio 2026

Torn-paper portfolio built from a paper sketch. Next.js 16, React 19, Tailwind 4,
GSAP, Lenis, procedural Web Audio.

## Run

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the build
```

## Structure

| Path | What |
|---|---|
| `app/page.tsx` | Landing: hero, about, pixel-me + skills, universe, polaroid, mind map |
| `app/work/logos/` | Logos & Marks gallery |
| `app/work/[category]/` | The other eight mind-map categories (placeholders for now) |
| `components/landing/` | Landing sections |
| `components/logos/` | Gallery, marquee, lightbox, the torn `Crack` |
| `lib/site.ts` | All copy, skills, experience, mind-map routes |
| `lib/logos.ts` | The 20 logo entries |
| `lib/sound.ts` | Procedural sound effects (no audio files) |

## Assets

Raw drops live in `assets-raw/` (git-ignored). Two scripts turn them into what
`public/` serves — rerun both after adding new raw files:

```bash
node scripts/process-assets.mjs
```

Side-crops every logo video/image to a square, encodes web-sized MP4s plus
posters, and copies the avatar sources.

```bash
node scripts/make-avatars.mjs
```

Keys the black backdrop out of the pixel avatars and cuts the square head crop
used by the drag-to-repair canvas.

## Palette

`ink #0b0b0c` · `paper #f5f2ea` · `purple #7a3cf0` · `yellow #ffd400` ·
`flame #ff2b2b`

## Still to come

- Real client, year and blurb for each of the 20 logos (names are read off the art)
- Two remaining logo slots (19, 20)
- Content for the eight non-logo categories

## Deploy

Vercel, zero config — it detects Next.js. Either connect the repo at
[vercel.com/new](https://vercel.com/new), or from this folder:

```bash
npx vercel --prod
```
