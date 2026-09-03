# Asset Spec — Portfolio 2026

Everything Ameen makes, and how it has to be made so it drops straight in.

## The look

Forged metal, poured concrete, molten gold in the cracks. Not paper.

| Role | Value | Where |
|---|---|---|
| Concrete | `#d8d4cc` → `#a8a49c` mottled | the whole light surface |
| Ink | `#0b0b0c` | type, metal bodies |
| Gold | `#f0b323` core, `#ffe08a` hot, `#7a4a00` shadow | crack light, bevels, bolts, swashes |
| Red | `#ff2b2b` | cat rim, dark-band grid, Experience dates |
| Green | `#2ec27e` | Education highlight |
| Purple | `#7a3cf0` | "visually striking", hover states |

## Rules for every file

1. **PNG-24 with real alpha.** No white boxes, no matte fringe.
2. **2× the size you think.** I downscale; I can't upscale.
3. **No baked drop shadows.** I cast them in code so they react to hover and scroll. Bake the *material* — bevel, rim light, scratches, reflections. Not the shadow on the floor.
4. **One light direction everywhere: key from top-left, gold rim from bottom-right.** If two assets disagree the whole page reads fake.
5. **Straight-on or near-straight-on.** Heavy perspective can't be re-laid-out.
6. **Name files exactly as listed.** Drop them in `assets-raw/`, I run the pipeline.

---

## 1 — Surface

| File | Size | Notes |
|---|---|---|
| `surface-concrete.jpg` | 3000×2000 | Mottled plaster/concrete. Fine hairline cracks, subtle stains, no big features. Must not read as a photo of a specific wall — it tiles behind everything. |
| `tear-gold-main.png` | 4000×700, alpha | **The hero asset.** One horizontal rip across the page. Torn fibrous paper/plaster edges top and bottom, and between them a **molten gold crack** — glowing amber veins, hot white core, embers. Alpha above and below the tear so the page shows through. |
| `tear-gold-alt.png` | 4000×500, alpha | Second rip, different tear pattern, thinner. Used lower down so no two tears repeat. |
| `tear-edge-dark.png` | 4000×400, alpha | The edge where concrete gives way to the dark band. Torn, no gold, ragged. |

## 2 — AMEEN chain

| File | Size | Notes |
|---|---|---|
| `block-a.png` `block-m.png` `block-e1.png` `block-e2.png` `block-n.png` | 900×900 each, alpha | Dark gunmetal cube, slight 3/4 turn, **gold beveled edges**, gold bolt at each corner, letter cut into the face. Cast the five separately so they aren't identical — vary the wear. |
| `block-glow-a.png` … | 900×900 each, alpha | Same blocks, **lit**: gold pouring from the bevels, face glowing. This is the hover state. If you only make one set, make the lit set and I'll dim it in code. |
| `chain-link.png` | 600×220, alpha | Heavy industrial chain, horizontal, **must tile seamlessly left-to-right** — put a whole number of links across and match the cut. Dark metal, gold rim from below. |
| `chain-drop.png` | 200×400, alpha | Short vertical chain, hangs each block off the main chain. |

## 3 — Assemble-me figure

The interaction: parts scattered, visitor clicks to snap them together.

| File | Size | Notes |
|---|---|---|
| `part-head.png` `part-torso.png` `part-arm-l.png` `part-arm-r.png` `part-leg-l.png` `part-leg-r.png` | each ≥600px on long edge, alpha | The figure **cut into six pieces**. Cut on clean silhouette lines. Each piece positioned as it sits in the assembled figure — I place them by their own bounds, so don't re-center them. |
| `frame-corner.png` | 160×160, alpha | One corner of the metal bracket + gold bolt. I mirror it four ways and stretch the sides, so I only need the corner. |

I draw the dashed connector lines and the "CLICK TO ASSEMBLE" note in code.

## 4 — Skills ring

| File | Size | Notes |
|---|---|---|
| `tool-figma.png` `tool-photoshop.png` `tool-illustrator.png` `tool-aftereffects.png` `tool-premiere.png` `tool-indesign.png` `tool-blender.png` `tool-spline.png` | 512×512 each, alpha | Dark metal rounded-square tile, **gold beveled corner bolts**, the app glyph inset and glowing in its own brand colour. Same tile geometry across all eight — only the glyph changes. |
| `tool-glow.png` | 512×512, alpha | Optional: one lit version of the empty tile. I tint per-tool if you'd rather not make eight lit copies. |

Heads up: those are other companies' trademarks. Fine on a personal portfolio, worth knowing before it goes on anything commercial.

## 5 — Dark band

| File | Size | Notes |
|---|---|---|
| `cat-walk.webm` | 1600px wide, **alpha**, 4–6s seamless loop | Black cat walking in place, red neon rim light, eyes lit. **Alpha channel is the whole point** — I composite it over the grid. Export VP9 + alpha, or hand me a PNG frame sequence and I'll build it. |
| `cat-still.png` | 2000px wide, alpha | Fallback for reduced-motion and first paint. |
| `grid-red.mp4` | 1920×1080, 6s loop | Dark perspective grid receding, red lines, drifting. No alpha needed — it's the backdrop. |

The tool-name chips moving right-to-left I do in code.

## 6 — Type furniture

| File | Size | Notes |
|---|---|---|
| `swash-gold.png` | 800×90, alpha | Rough gold brush underline. One is enough — I scale, flip and re-colour it. |
| `bolt.png` | 128×128, alpha | Single gold bolt/rivet, used as a bullet and a pin. |

---

## What I build in code — don't make these

Type and layout · the dashed orbit ring and its glow dots · connector lines · the outlined tool chips · every drop shadow · grain and noise · all glow and bloom · hover and click states · the chain physics and sway · the assemble-snap · the space nebula and starfield · scroll motion · sound.

## What's already done and staying

All 20 logos. The copy — your words. The whole text layer you said reads right.

---

## Missing

- `02 — VYRNOX` (Logotype)
- `18 — MODULIS` (Modular Symbol)

## One catch in your mockup

The title reads **PORTFFOLIO** — double F. Worth fixing before it goes anywhere.
