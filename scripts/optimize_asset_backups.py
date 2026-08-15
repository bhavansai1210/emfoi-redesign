from pathlib import Path

from PIL import Image


SOURCE = Path("client/public/asset-backup")
TARGET = SOURCE / "optimized"
MAX_BYTES = 900_000
RASTER_ASSETS = [
    "emfoi-ai-governance.jpg",
    "emfoi-healthcare-staffing.jpg",
    "emfoi-hero-civic-systems.jpg",
    "emfoi-signal-mark.png",
    "emfoi-signal-mark_original.png",
    "emfoi-software-ux.jpg",
    "emfoi-herndon-location-map.png",
]


def save_webp(image: Image.Image, output: Path) -> tuple[int, tuple[int, int], int]:
    working = image.copy()
    if working.mode not in {"RGB", "RGBA"}:
        working = working.convert("RGBA" if "transparency" in working.info else "RGB")

    quality = 86
    while True:
        working.save(output, "WEBP", quality=quality, method=6)
        size = output.stat().st_size
        if size <= MAX_BYTES or (quality <= 56 and max(working.size) <= 1600):
            return size, working.size, quality
        if quality > 60:
            quality -= 6
        else:
            working.thumbnail((max(1200, int(working.width * 0.82)), max(1200, int(working.height * 0.82))), Image.Resampling.LANCZOS)


def main() -> None:
    TARGET.mkdir(parents=True, exist_ok=True)
    print("asset,dimensions,quality,bytes")
    for filename in RASTER_ASSETS:
        source = SOURCE / filename
        output = TARGET / f"{source.stem}.webp"
        with Image.open(source) as image:
            size, dimensions, quality = save_webp(image, output)
        print(f"{output.name},{dimensions[0]}x{dimensions[1]},{quality},{size}")


if __name__ == "__main__":
    main()
