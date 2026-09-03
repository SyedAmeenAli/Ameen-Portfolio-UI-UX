/**
 * The paper system.
 *
 * Every torn edge on the site is a straight-ish shape pushed through
 * feTurbulence + feDisplacementMap. The noise chews the edge into real fibre —
 * irregular, never repeating, different at every scale. That is what a
 * clip-path polygon can never do: a polygon has corners you can count.
 *
 * Rendered once, near the top of <body>.
 */
export function PaperDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute" focusable="false">
      <defs>
        {/* --- torn edges, three coarsenesses ------------------------------ */}
        {[
          { id: "tear-fine", freq: "0.028 0.09", scale: 14, octaves: 4, seed: 7 },
          { id: "tear", freq: "0.016 0.055", scale: 26, octaves: 5, seed: 3 },
          { id: "tear-coarse", freq: "0.009 0.03", scale: 46, octaves: 5, seed: 11 },
        ].map(({ id, freq, scale, octaves, seed }) => (
          <filter
            key={id}
            id={id}
            x="-15%"
            y="-15%"
            width="130%"
            height="130%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves={octaves}
              seed={seed}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={scale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        ))}

        {/* --- torn edge + the shadow the lifted fibre casts --------------- */}
        <filter id="tear-lift" x="-25%" y="-25%" width="150%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.05"
            numOctaves={5}
            seed={5}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={24}
            xChannelSelector="R"
            yChannelSelector="G"
            result="torn"
          />
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="12"
            floodColor="#0b0b0c"
            floodOpacity="0.34"
          />
        </filter>

        {/* --- crumple: a soft height field used to shade flat fills ------- */}
        <filter id="crumple" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006"
            numOctaves={5}
            seed={17}
            result="height"
          />
          <feDiffuseLighting
            in="height"
            lightingColor="#ffffff"
            surfaceScale="2.4"
            diffuseConstant="1"
            result="lit"
          >
            <feDistantLight azimuth="235" elevation="58" />
          </feDiffuseLighting>
          <feComposite in="lit" in2="SourceGraphic" operator="in" />
        </filter>

        {/* --- paper fibre grain ------------------------------------------ */}
        <filter id="fibre" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={3} seed={2} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.04
                    0 0 0 0 0.04
                    0 0 0 0 0.05
                    0 0 0 0.5 0"
          />
        </filter>

      </defs>
    </svg>
  );
}
