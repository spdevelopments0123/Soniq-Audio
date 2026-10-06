import os
from PIL import Image

src_path = r"C:\Users\hp\.gemini\antigravity-ide\brain\ae11c3ff-6a57-461c-9a27-c5c7fcc42c5c\.user_uploaded\media_1791127041726.jpg"
out_dir = r"c:\Users\hp\Documents\SONIQ AUDIO\assets\images\products"

os.makedirs(out_dir, exist_ok=True)
img = Image.open(src_path)

# Image dimensions: 1024 x 682
# We define grid mappings for all 24 products

items = [
    # --- EARBUDS (Top Left: x 0..512, y 0..341) ---
    {"id": "eb-01", "name": "soniq_air1", "box": (5, 45, 168, 190)},
    {"id": "eb-02", "name": "soniq_air2", "box": (170, 45, 338, 190)},
    {"id": "eb-03", "name": "soniq_airpro", "box": (340, 45, 508, 190)},
    {"id": "eb-04", "name": "soniq_neo", "box": (5, 192, 168, 338)},
    {"id": "eb-05", "name": "soniq_zen", "box": (170, 192, 338, 338)},
    {"id": "eb-06", "name": "soniq_sport", "box": (340, 192, 508, 338)},

    # --- HEADPHONES (Top Right: x 512..1024, y 0..341) ---
    {"id": "hp-01", "name": "soniq_h1", "box": (515, 45, 682, 190)},
    {"id": "hp-02", "name": "soniq_h2", "box": (684, 45, 852, 190)},
    {"id": "hp-03", "name": "soniq_h3", "box": (854, 45, 1020, 190)},
    {"id": "hp-04", "name": "soniq_pro", "box": (515, 192, 682, 338)},
    {"id": "hp-05", "name": "soniq_studio", "box": (684, 192, 852, 338)},
    {"id": "hp-06", "name": "soniq_luxe", "box": (854, 192, 1020, 338)},

    # --- SPEAKERS (Bottom Left: x 0..512, y 341..682) ---
    {"id": "sp-01", "name": "soniq_mini", "box": (5, 386, 168, 532)},
    {"id": "sp-02", "name": "soniq_pop", "box": (170, 386, 338, 532)},
    {"id": "sp-03", "name": "soniq_pulse", "box": (340, 386, 508, 532)},
    {"id": "sp-04", "name": "soniq_boom", "box": (5, 534, 168, 680)},
    {"id": "sp-05", "name": "soniq_adventure", "box": (170, 534, 338, 680)},
    {"id": "sp-06", "name": "soniq_party", "box": (340, 534, 508, 680)},

    # --- SOUNDBARS (Bottom Right: x 512..1024, y 341..682) ---
    {"id": "sb-01", "name": "soniq_sb1", "box": (515, 386, 682, 532)},
    {"id": "sb-02", "name": "soniq_sb2", "box": (684, 386, 852, 532)},
    {"id": "sb-03", "name": "soniq_sb3", "box": (854, 386, 1020, 532)},
    {"id": "sb-04", "name": "soniq_sb4", "box": (515, 534, 682, 680)},
    {"id": "sb-05", "name": "soniq_sb5", "box": (684, 534, 852, 680)},
    {"id": "sb-06", "name": "soniq_sb6", "box": (854, 534, 1020, 680)},
]

for item in items:
    crop_img = img.crop(item["box"])
    filename = f"{item['id']}_{item['name']}.jpg"
    filepath = os.path.join(out_dir, filename)
    crop_img.save(filepath, "JPEG", quality=95)
    print(f"Saved {filepath}")

print("Cropping complete!")
