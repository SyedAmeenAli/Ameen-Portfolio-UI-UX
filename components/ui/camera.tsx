"use client";

// CSS Polaroid camera — press the shutter, a photo ejects and develops.
// Fully self-contained: the wrapper is tall enough that the ejected print
// never spills into the next section.
import styled from "styled-components";

export default function PolaroidCamera() {
  return (
    <StyledWrapper>
      <div className="camera-wrapper">
        <input type="checkbox" id="snap" className="shutter-input" />
        <div className="flash-overlay" />
        <div className="camera-body">
          <div className="rainbow-stripe" />
          <div className="viewfinder" />
          <div className="flash-unit" />
          <div className="lens-housing">
            <div className="lens-ring" />
            <div className="lens-glass">
              <div className="aperture" />
            </div>
          </div>
          <div className="label-plate">ONE-STEP</div>
          <div className="shutter-btn">
            <label htmlFor="snap" className="shutter-label" />
          </div>
          <div className="bottom-lip" />
        </div>
        <div className="film-slot">
          <div className="film-image">
            <div className="film-content">
              <span className="film-name">AMEEN ALI</span>
              <span className="film-role">UI / UX DESIGNER</span>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  .camera-wrapper {
    position: relative;
    width: 300px;
    max-width: 84vw;
    /* camera (300) + fully ejected print (~320) */
    height: 620px;
    display: flex;
    justify-content: center;
    font-family: var(--font-mono), monospace;
  }
  .shutter-input { display: none; }
  .camera-body {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 290px;
    height: 300px;
    background-color: #16151a;
    border-radius: 26px 26px 36px 36px;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.6), 0 20px 44px rgba(0,0,0,0.55),
      inset 2px 2px 6px rgba(240,179,35,0.12);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    overflow: hidden;
  }
  .rainbow-stripe {
    position: absolute; top: 0; bottom: 0; width: 42px; left: 0;
    background: linear-gradient(180deg, #7a4a00, #f0b323 45%, #fff2d0 55%, #f0b323);
    z-index: 1;
  }
  .bottom-lip {
    position: absolute; bottom: 0; left: 0; right: 0; height: 16px;
    background: #201f26; border-top: 1px solid #35343c; z-index: 15;
  }
  .lens-housing {
    width: 150px; height: 150px; background: #0a0a0c; border-radius: 50%;
    margin-top: 30px; position: relative; z-index: 5;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5), 0 0 0 4px #35343c, 0 0 0 6px #f0b32333;
    display: flex; justify-content: center; align-items: center;
  }
  .lens-ring {
    width: 130px; height: 130px; border-radius: 50%; border: 2px dashed #4a4a52;
    position: absolute; animation: focus-turn 12s linear infinite;
  }
  @keyframes focus-turn { to { transform: rotate(360deg); } }
  .lens-glass {
    width: 98px; height: 98px; border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #3a3a44, #000 70%);
    position: relative; overflow: hidden; box-shadow: inset 0 0 12px #000;
  }
  .lens-glass::after {
    content: ""; position: absolute; inset: -50%;
    background: radial-gradient(circle at 60% 40%, rgba(255,224,138,0.16) 0%, transparent 12%),
      radial-gradient(circle at 40% 60%, rgba(124,77,255,0.2) 0%, transparent 22%);
  }
  .aperture {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 34px; height: 34px; background: #050505; border-radius: 50%; border: 1px solid #333;
  }
  .viewfinder {
    position: absolute; top: 24px; left: 22px; width: 50px; height: 40px;
    background: #111; border-radius: 4px; border: 3px solid #35343c;
    box-shadow: inset 0 0 10px #000;
  }
  .flash-unit {
    position: absolute; top: 24px; right: 22px; width: 68px; height: 24px;
    background: #23222a; border: 2px solid #35343c; border-radius: 3px;
    background-image: repeating-linear-gradient(90deg, #2c2b33 0, #2c2b33 2px, transparent 2px, transparent 4px);
  }
  .shutter-btn {
    position: absolute; bottom: 32px; right: 22px; width: 50px; height: 50px;
    background: radial-gradient(circle at 30% 30%, #ff6a4d, #cc2200);
    border-radius: 50%; border: 4px solid #35343c; cursor: pointer;
    box-shadow: 0 5px 10px rgba(0,0,0,0.4), inset 0 2px 5px rgba(255,255,255,0.3);
    z-index: 20; transition: transform 0.1s;
  }
  .label-plate {
    position: absolute; bottom: 32px; left: 22px; font-size: 0.58rem; letter-spacing: 0.1em;
    color: #f0b32399; background: #201f26; padding: 4px 6px; border: 1px solid #35343c; border-radius: 3px;
  }
  .film-slot {
    position: absolute;
    top: 258px;               /* tucked just under the camera lip */
    left: 50%;
    transform: translateX(-50%);
    width: 214px;
    height: 250px;
    background: #efe9dd;
    padding: 12px 12px 42px 12px;
    box-shadow: 0 8px 22px rgba(0,0,0,0.4);
    z-index: 1;
    transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .film-image { width: 100%; height: 100%; background: #000; overflow: hidden; position: relative; }
  .film-content {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 6px; text-align: center;
    background: radial-gradient(circle at 50% 30%, #1b1a1f, #060507);
    opacity: 0;
  }
  .film-name { font-family: var(--font-display); font-size: 1.05rem; letter-spacing: -0.02em; color: #efe9dd; }
  .film-role { font-size: 0.54rem; letter-spacing: 0.26em; color: #f0b323; }

  #snap:checked ~ .film-slot { transform: translate(-50%, 300px) rotate(-2deg); z-index: 5; }
  #snap:checked ~ .film-slot .film-content { animation: develop 3.2s ease-in forwards; animation-delay: 0.7s; }
  @keyframes develop {
    0% { opacity: 0; filter: grayscale(100%) contrast(220%); }
    55% { opacity: 0.55; filter: grayscale(45%) contrast(150%); }
    100% { opacity: 1; filter: grayscale(0%) contrast(100%); }
  }
  .flash-overlay {
    position: absolute; inset: 0; background: #fff; opacity: 0; pointer-events: none; z-index: 100;
  }
  #snap:checked ~ .flash-overlay { animation: flash-bang 0.22s ease-out; }
  @keyframes flash-bang { 0% { opacity: 0.8; } 100% { opacity: 0; } }
  #snap:checked ~ .camera-body .shutter-btn { transform: scale(0.94); }
  .shutter-label { display: block; width: 100%; height: 100%; }
`;
