"""Generates PWA app icons matching the existing favicon.svg design (an eye glyph on a
brand-blue rounded square) since PIL can't rasterize SVG directly. Run with:
    python3 scripts/generate-pwa-icons.py
"""
from PIL import Image, ImageDraw
import math

BRAND = (29, 78, 216, 255)  # #1d4ed8
WHITE = (255, 255, 255, 255)

def draw_eye(draw, cx, cy, scale, color_bg, color_fg):
    # Eye outline: a lens/almond shape built from two arcs, matching the favicon path.
    w = 24 * scale
    h = 16 * scale
    bbox_top = [cx - w / 2, cy - h, cx + w / 2, cy + h]
    bbox_bot = [cx - w / 2, cy - h, cx + w / 2, cy + h]
    # Use a simple vesica (two overlapping circles) to approximate the eye outline.
    r = 15 * scale
    lw = max(1, round(2 * scale))
    draw.ellipse([cx - r, cy - r * 0.62, cx + r, cy + r * 0.62], outline=color_fg, width=lw)
    pupil_r = 4.5 * scale
    draw.ellipse([cx - pupil_r, cy - pupil_r, cx + pupil_r, cy + pupil_r], fill=color_fg)
    inner_r = 2 * scale
    draw.ellipse([cx - inner_r, cy - inner_r, cx + inner_r, cy + inner_r], fill=color_bg)

def make_icon(size, path, maskable=False):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    if maskable:
        # Maskable icons need the safe zone (icon content within the inner ~80%) fully filled
        # with the background color, no rounded corners (the OS applies its own mask shape).
        draw.rectangle([0, 0, size, size], fill=BRAND)
        scale = size / 32 * 0.62
    else:
        radius = round(size * 7 / 32)
        draw.rounded_rectangle([0, 0, size, size], radius=radius, fill=BRAND)
        scale = size / 32

    draw_eye(draw, size / 2, size / 2, scale, BRAND, WHITE)
    img.save(path)
    print(f'wrote {path} ({size}x{size}, maskable={maskable})')

make_icon(192, 'public/pwa-192.png')
make_icon(512, 'public/pwa-512.png')
make_icon(512, 'public/pwa-maskable-512.png', maskable=True)
make_icon(180, 'public/apple-touch-icon.png')
