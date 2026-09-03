"""
Remove the Gemini sparkle from the bottom-right corner.

The mark sits at a fixed relative position on every Gemini export.

  mode "inpaint"  (default): OpenCV-inpaint a small box anchored there. Clean on
                  flat / starfield corners; leaves a soft smudge on busy ones.
  mode "crop":    shave a thin strip off the right + bottom. Zero smudge, loses
                  a sliver of the frame. Use for art where a crop is invisible.

Usage:  python scripts/dewatermark.py <in_dir> <out_dir> [inpaint|crop]
"""

import io
import sys
import os
import glob
import cv2
import numpy as np

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
IN_DIR, OUT_DIR = os.path.normpath(sys.argv[1]), os.path.normpath(sys.argv[2])
MODE = sys.argv[3] if len(sys.argv) > 3 else "inpaint"
os.makedirs(OUT_DIR, exist_ok=True)

CX_FRAC, CY_FRAC = 0.918, 0.957
HALF_AT_2K = 34
CROP_RIGHT_FRAC = 0.065
CROP_BOTTOM_FRAC = 0.04


def dst_for(path):
    return os.path.join(OUT_DIR, os.path.relpath(path, IN_DIR))


def has_alpha(img):
    return img is not None and img.ndim == 3 and img.shape[2] == 4


def process(path):
    data = np.fromfile(path, dtype=np.uint8)
    img = cv2.imdecode(data, cv2.IMREAD_UNCHANGED)
    if img is None:
        return "read-fail"
    H, W = img.shape[:2]

    if MODE == "crop":
        out = img[: int(H * (1 - CROP_BOTTOM_FRAC)), : int(W * (1 - CROP_RIGHT_FRAC))]
        note = f"crop -{int(W * CROP_RIGHT_FRAC)}x{int(H * CROP_BOTTOM_FRAC)}"
    else:
        alpha = img[:, :, 3] if has_alpha(img) else None
        if alpha is not None:
            img = img[:, :, :3]
        cx, cy = int(W * CX_FRAC), int(H * CY_FRAC)
        half = max(24, int(HALF_AT_2K * W / 1536))
        mask = np.zeros((H, W), np.uint8)
        cv2.rectangle(mask, (cx - half, cy - half), (min(W - 1, cx + half), min(H - 1, cy + half)), 255, -1)
        out = cv2.inpaint(img, mask, 4, cv2.INPAINT_TELEA)
        out = cv2.inpaint(out, cv2.dilate(mask, np.ones((3, 3), np.uint8)), 3, cv2.INPAINT_NS)
        if alpha is not None:
            out = np.dstack([out, alpha])
        note = f"inpaint@{cx},{cy}"

    d = dst_for(path)
    os.makedirs(os.path.dirname(d), exist_ok=True)
    ext = os.path.splitext(d)[1].lower()
    params = [cv2.IMWRITE_JPEG_QUALITY, 95] if ext in (".jpg", ".jpeg") else []
    cv2.imencode(ext, out, params)[1].tofile(d)
    return note


files = sorted(
    glob.glob(os.path.join(IN_DIR, "**", "*.jpg"), recursive=True)
    + glob.glob(os.path.join(IN_DIR, "**", "*.jpeg"), recursive=True)
    + glob.glob(os.path.join(IN_DIR, "**", "*.png"), recursive=True)
    + glob.glob(os.path.join(IN_DIR, "**", "*.webp"), recursive=True)
)
for f in files:
    print(f"{os.path.basename(f):50s} {process(f)}")
