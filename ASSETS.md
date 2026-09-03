# ASSET SPEC — Portfolio 2026 (forged metal / concrete / molten gold)

Ameen makes the images. Claude builds type, layout, motion, shadows, glow, states.

## THE LOOK
Forged gunmetal + poured concrete + molten gold in every crack. Dark, premium, cinematic.

Colours:
- concrete light `#d8d4cc`→`#a8a49c`  ·  concrete dark `#1c1b1a`→`#2a2724`
- ink `#0b0b0c`
- gold: core `#f0b323`  hot `#ffe08a`  shadow `#7a4a00`
- red `#ff2b2b`  ·  green `#2ec27e`  ·  purple `#7a3cf0`

## RULES (every file)
1. PNG-24, real alpha, transparent background. No white box, no matte fringe.
2. Export at 2x the listed size.
3. NO baked drop shadow / ground shadow. Bake the material only: bevel, rim light, scratches, reflections.
4. One light everywhere: cool key from TOP-LEFT, warm molten-gold rim from LOWER-RIGHT.
5. Straight-on / orthographic. No heavy perspective.
6. Exact filenames. Drop in `assets-raw/`. Claude runs the pipeline.

## PROMPT PREAMBLE — prepend to every image prompt
> Isolated object on a fully transparent background (PNG alpha), straight-on orthographic front view, NO drop shadow, NO ground shadow. Lighting: cool key from top-left, warm molten-gold rim from lower-right. Style: dark premium cinematic product render — forged gunmetal, poured concrete, glowing molten gold in every crack and bevel. Micro-scratches, brushed grain, dust. 8k, razor sharp, HDR.

---

## SHARED — used on all three pages

### `surface-concrete-light.jpg` · 3000x2000 · no alpha
> Seamless flat wall of pale warm concrete and cracked plaster, `#d8d4cc` fading to `#a8a49c` in patches. Hairline cracks, faint water stains, air bubbles, sparse dark speckles. Even frontal light, no shadows, NO focal point — pure background texture. Photoreal, flat-on, high resolution.

### `surface-concrete-dark.jpg` · 3000x2000 · no alpha
> Seamless flat wall of dark charcoal concrete, `#1c1b1a` to `#2a2724`, wet-looking patches. A few cracks glowing faintly from within with dim amber light. Soot, grime, cold blue ambient plus warm crack glow. Even flat light, no focal point. Photoreal, flat-on.

### `tear-gold-main.png` · 4000x800 · alpha · **HERO ASSET**
> A horizontal rip torn straight across pale concrete plaster, flat-on. Torn edges thick, fibrous, crumbling, chunks hanging. Between the two lips runs a channel of MOLTEN GOLD: bright white-hot core, glowing amber veins branching into the plaster, sparks, floating embers, heat shimmer. Gold light spills warm onto the torn edges. Fully transparent above the top lip and below the bottom lip — only the plaster lips and the glowing seam are opaque. Seamless left and right.

### `tear-gold-alt.png` · 4000x600 · alpha
Same as `tear-gold-main` but: a thinner, more jagged crack, a different tear pattern, fewer embers, slightly cooler gold.

### `tear-to-dark.png` · 4000x500 · alpha
> A horizontal torn edge where pale cracked concrete gives way to pure black void below. Concrete rips into a ragged fibrous fringe, small pieces falling. No gold. Faint red underglow rising from the black. Transparent above the concrete and through the black region below the fringe. Seamless left-right.

### `swash-gold.png` · 900x120 · alpha
> A single rough brush-stroke of molten gold paint, horizontal, tapered both ends, uneven edges, a few flecks and drips. Gold `#f0b323` with `#ffe08a` highlights and `#7a4a00` in the thin parts. Slight wet 3D relief.

### `bolt-gold.png` · 160x160 · alpha
> A single hex-head industrial bolt / rivet, polished brass-gold, straight from the front, slightly domed. Worn edges, tiny scratches, a spot of tarnish.

### `bracket-gold.png` · 500x700 · alpha
> An empty vertical rounded-rectangle frame of forged gold bar, like a heavy bookmark bracket. Hand-beaten texture, bevelled inner and outer edge, one small bolt at each rounded corner. Hollow transparent centre.

Claude sets the `2026` digits inside it.

---

## PAGE 1 — LANDING

### `block-a.png` / `block-m.png` / `block-e1.png` / `block-e2.png` / `block-n.png` · 900x900 each · alpha
> A single heavy cube of dark gunmetal, floating, rotated ~15 degrees so two faces show, near straight-on. Every edge is a thick BEVEL of forged gold. A fat gold bolt sunk into each of the four visible corners of the front face. Front face is dark brushed steel with the capital letter "A" deeply engraved, the cut edges catching gold light. Scuffs, grime in the crevices.

Repeat with M, E, E, N. Vary rotation ±5° and wear so the five differ.

### `block-glow-a.png` / `-m` / `-e1` / `-e2` / `-n` · 900x900 each · alpha
Same prompt + : the gold bevels and bolts glowing hot and pouring light, the engraved letter glowing white-gold from inside the cut, embers rising.

If you make only one set, make the GLOW set — Claude dims it for the resting state.

### `chain-link-h.png` · 800x260 · alpha
> A straight horizontal run of heavy industrial iron chain, ~6 oval links, lying flat, straight-on. Dark forged iron, pitted, warm gold rim along the lower side of each link. The far-left and far-right links are cut exactly at the link midpoint so the image TILES seamlessly end to end.

### `chain-drop.png` · 240x460 · alpha
> A short vertical length of the same heavy iron chain, 4 links, hanging straight down, straight-on. Top link open as if hooked over a bar. Dark forged iron, gold rim one side.

### FIGURE — two options
- **(a) cut job:** take your existing front pixel avatar, slice into 6 parts in Photoshop on clean silhouette lines, export each on its own transparent canvas KEEPING its position. No AI.
- **(b) re-render:** "A full-body pixel-art figure of a young man in a black hoodie, dark jeans, sneakers, front view, chunky 16-bit pixels, transparent background." then slice into 6.

Files: `fig-head.png` `fig-torso.png` `fig-arm-l.png` `fig-arm-r.png` `fig-leg-l.png` `fig-leg-r.png` — each ≥800px long edge, alpha, left in assembled position.

### `frame-bracket-corner.png` · 220x220 · alpha
> One corner piece of a rugged metal photo-bracket: an L-shaped length of dark riveted steel with a single glowing gold bolt at the elbow and a small gold triangular gusset.

Claude mirrors it to build all four corners.

### `tool-figma.png` / `-photoshop` / `-illustrator` / `-aftereffects` / `-premiere` / `-indesign` / `-blender` / `-spline` · 512x512 each · alpha
> A rounded-square app tile, straight-on. Body is dark brushed gunmetal with a thick forged-gold bevelled border and a small gold bolt in each corner. Inset in the centre, floating slightly above the surface and glowing in its own brand colours, is the [Figma] logo glyph. Cool key top-left, gold rim lower-right, plus coloured bounce light from the glyph.

Swap `[Figma]` for Photoshop / Illustrator / After Effects / Premiere Pro / InDesign / Blender / Spline. KEEP THE TILE IDENTICAL, only change the glyph.

_Note: those glyphs are other companies' trademarks. Fine for a personal portfolio; know it before anything commercial._

### `cat-still.png` · 2200px wide · alpha
> A sleek black cat standing in profile, mid-stride, head turned toward camera, eyes glowing amber. A sharp RED neon rim light traces the whole silhouette; faint red ember particles drift around it. Body near-black with deep red reflections. Photoreal, cinematic.

### `cat-walk` · video · ~5s seamless loop · 1600px+ wide
Flow/Veo cannot export alpha. Prompt for Flow:
> A sleek black cat walking in place, smooth seamless loop, side view, head occasionally turning to camera, glowing amber eyes, sharp red neon rim light on its outline, drifting red embers. Background: solid flat chroma-key GREEN #00b140, evenly lit, nothing else.

Send the mp4. Claude keys the green and composites over the grid.

### `grid-red-loop` · video · ~6s loop · 1080p · no alpha
Prompt for Flow:
> A dark endless floor of glowing red wireframe grid lines receding to a low horizon, slow forward drift, seamless loop, faint red fog, black sky with a few red sparks. Tron-like, cinematic, moody.

---

## PAGE 2 — CREATIVE HEAD + MIND MAP

### `surface-blueprint.png` · 3000x2000 · no alpha
> A seamless dark technical surface: near-black charcoal `#14120f` overlaid with a faint precise grid of thin gold lines, plus faint blueprint circles and measurement ticks in dim gold. Weathered, some lines broken. Flat frontal light, no focal point.

### `polaroid-frame.png` · 800x950 · alpha
> An empty instant-photo frame, straight-on: aged off-white card, thick border, extra-thick bottom border, soft rounded corners, slight bends, coffee-stain marks, one torn corner. The centre photo window is FULLY TRANSPARENT (cut out). Faint gold leaf worn into the bottom edge.

### `stamp-trust.png` · 500x500 · alpha
> A circular rubber-stamp impression: the words TRUST THE PROCESS around the ring with a small star in the centre, stamped in worn METALLIC GOLD ink — patchy, cracked, some letters faint, slightly rotated.

### `chevron-gold.png` · 160x110 · alpha
> A single bold upward chevron (rank-insignia stripe) forged from gold bar, hand-beaten, bevelled, one tiny bolt at each tip.

Claude stacks 3.

### `barcode-plate.png` · 600x220 · alpha
> A small rectangular plate of dark brushed steel with a barcode EMBOSSED into it (raised metal bars catching gold light) and the words SCAN ME engraved below in a mono typeface. Gold bevel border, a bolt in two corners.

### `node-frame.png` · 460x320 · alpha
> An empty industrial nameplate: a rectangular slab of dark brushed gunmetal with a heavy forged-gold bevelled frame and a gold bolt in each corner. The centre recess is dark and empty.

Claude engraves each mind-map label into it — ONE frame, reused for all 9 nodes.

### `node-frame-active.png` · 460x320 · alpha
Same + : the gold frame and bolts glowing hot, casting warm light into the empty recess, faint embers at the corners. (hover state)

### `node-pin.png` · 90x90 · alpha
> A single glowing gold anchor stud — a domed rivet with a bright molten-gold core and a hot halo, white-hot.

Where threads meet a node.

### `thread-cable.png` · 700x48 · alpha
> A short straight HORIZONTAL segment of taut cable, straight-on: braided dark steel wire wrapped in places with gold wire, a faint amber glow running through the core like a fuse. Ends cut clean so it tiles.

Claude bends it along each path and vibrates it.

### `ring-single.png` · 220x280 · alpha
> A single heavy chrome torus / ring at a slight angle, polished mirror metal, warm gold reflection along the bottom curve, cool highlight on top, small nicks.

Claude repeats + undulates it for the ring chain.

---

## PAGE 3 — LOGOS & MARKS

### `sign-plate-blank.png` · 1500x950 · alpha
> A large piece of thick torn card / chipboard pinned to a dark wall, straight-on, BLANK face. Heavily torn ragged fibrous edges all around, one folded corner. Aged cream colour, a few scorch marks at the edges. A worn strip of dark tape across the top-left and bottom-right corners. Faint gold leaf flaking off one edge. Only the card is opaque.

Claude sets the LOGOS AND MARKS type.

### `tape-strip.png` · 340x150 · alpha
> A single torn strip of worn matte gaffer tape, dark grey, frayed ends, slight sheen, straight-on.

### `nail-gold.png` · 110x110 · alpha
> A single hammered gold nail head straight from the front, domed, off-centre dent, small rust halo.

### `logo-tile-frame.png` · 640x640 · alpha
> An empty square frame for a logo: a slab of pale torn paper with ragged fibrous edges, on a thin dark metal backing that peeks out behind the tears, one gold bolt in the top-left corner. The paper centre is BLANK.

Claude masks each of the 20 logos into it.

### `lightbox-plate.png` · 1100x1300 · alpha
> A large single sheet of torn cream paper, portrait, ragged edges, a subtle fold down the middle, a strip of gold tape across the top, faint fingerprints. BLANK face.

---

## CLAUDE BUILDS — DO NOT MAKE
All type + layout · the `2026` digits (set inside `bracket-gold`) · dashed orbit ring + glow dots · every connecting thread PATH + the bend + the vibration (you give the straight cable segment only) · outlined tool-name chips in the dark band · every drop shadow · grain / noise / vignette · all glow, bloom, heat-haze · hover / click / active states (you give lit + unlit, Claude crossfades) · chain sway physics · assemble-snap animation · space nebula + starfield · scroll camera + reveals · sound.

## PRIORITY ORDER
1. `tear-gold-main.png` + `surface-concrete-light.jpg` — sets the whole tone
2. `block-a/m/e1/e2/n` (+ glow) + `chain-link-h` — hero centrepiece
3. `tool-figma` … `tool-spline` (8) — skills ring
4. `node-frame` + `node-frame-active` + `thread-cable` + `node-pin` — mind map
5. `cat-walk` + `grid-red-loop` + `tear-to-dark` — dark band
6. everything else

## STILL MISSING LOGOS
`02 VYRNOX` (Logotype) · `18 MODULIS` (Modular Symbol)

## NOTE
Your mockup title reads **PORTFFOLIO** — double F. The word has one F.
