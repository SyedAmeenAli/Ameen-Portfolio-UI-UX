"use client";

// ui-layouts CSS Polaroid camera — press the shutter, a photo ejects and
// develops. Film content swapped for Ameen's info card.
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
              <span className="film-note">the face stays off the page</span>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .camera-wrapper {
    position: relative;
    width: 340px;
    max-width: 84vw;
    height: 420px;
    display: flex;
    justify-content: center;
    perspective: 1000px;
    font-family: var(--font-mono), monospace;
  }
  .shutter-input { display: none; }
  .camera-body {
    position: relative;
    width: 300px;
    height: 320px;
    background-color: #16151a;
    border-radius: 28px 28px 38px 38px;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.6), 0 20px 44px rgba(0,0,0,0.6),
      inset 2px 2px 6px rgba(240,179,35,0.12);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 18px;
    overflow: hidden;
  }
  .rainbow-stripe {
    position: absolute; top: 0; bottom: 0; width: 46px; left: 0;
    background: linear-gradient(180deg, #7a4a00, #f0b323 45%, #fff2d0 55%, #f0b323);
    box-shadow: inset 0 0 10px rgba(0,0,0,0.4);
    z-index: 1;
  }
  .bottom-lip {
    position: absolute; bottom: 0; left: 0; right: 0; height: 18px;
    background: #201f26; border-top: 1px solid #35343c; z-index: 15;
  }
  .lens-housing {
    width: 158px; height: 158px; background: #0a0a0c; border-radius: 50%;
    margin-top: 34px; position: relative; z-index: 5;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5), 0 0 0 4px #35343c, 0 0 0 6px #f0b32333;
    display: flex; justify-content: center; align-items: center;
  }
  .lens-ring {
    width: 138px; height: 138px; border-radius: 50%; border: 2px dashed #4a4a52;
    position: absolute; animation: focus-turn 12s linear infinite;
  }
  @keyframes focus-turn { to { transform: rotate(360deg); } }
  .lens-glass {
    width: 104px; height: 104px; border-radius: 50%;
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
    width: 36px; height: 36px; background: #050505; border-radius: 50%; border: 1px solid #333;
  }
  .viewfinder {
    position: absolute; top: 26px; left: 26px; width: 54px; height: 44px;
    background: #111; border-radius: 4px; border: 3px solid #35343c;
    box-shadow: inset 0 0 10px #000; overflow: hidden;
  }
  .flash-unit {
    position: absolute; top: 26px; right: 26px; width: 74px; height: 26px;
    background: #23222a; border: 2px solid #35343c; border-radius: 3px;
    background-image: repeating-linear-gradient(90deg, #2c2b33 0, #2c2b33 2px, transparent 2px, transparent 4px);
  }
  .shutter-btn {
    position: absolute; bottom: 36px; right: 26px; width: 54px; height: 54px;
    background: radial-gradient(circle at 30% 30%, #ff6a4d, #cc2200);
    border-radius: 50%; border: 4px solid #35343c; cursor: pointer;
    box-shadow: 0 5px 10px rgba(0,0,0,0.4), inset 0 2px 5px rgba(255,255,255,0.3);
    z-index: 20; transition: transform 0.1s;
  }
  .label-plate {
    position: absolute; bottom: 36px; left: 26px; font-size: 0.62rem; letter-spacing: 0.1em;
    color: #f0b32399; background: #201f26; padding: 4px 6px; border: 1px solid #35343c; border-radius: 3px;
  }
  .film-slot {
    position: absolute; top: 288px; left: 50%; transform: translateX(-50%);
    width: 224px; height: 264px; background: #efe9dd; padding: 14px 14px 46px 14px;
    box-shadow: 0 5px 18px rgba(0,0,0,0.4); z-index: 1;
    transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .film-image { width: 100%; height: 100%; background: #000; overflow: hidden; position: relative; }
  .film-content {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 8px; text-align: center;
    background: radial-gradient(circle at 50% 30%, #1b1a1f, #060507);
    opacity: 0; padding: 0 10px;
  }
  .film-name { font-family: var(--font-display); font-size: 1.15rem; letter-spacing: -0.02em; color: #efe9dd; }
  .film-role { font-size: 0.58rem; letter-spacing: 0.28em; color: #f0b323; }
  .film-note { font-size: 0.5rem; letter-spacing: 0.16em; color: #a8a49c; }

  #snap:checked ~ .film-slot { transform: translate(-50%, 210px) rotate(-2deg); z-index: 5; }
  #snap:checked ~ .film-slot .film-content { animation: develop 3.4s ease-in forwards; animation-delay: 0.6s; }
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
