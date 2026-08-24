from pathlib import Path
from zipfile import ZipFile
from PIL import Image
import io

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
OUT = ROOT / "public" / "images" / "eadrasha"

MEDIA_MAP = {
    "ppt/media/image1.png": "eadrasha-product-hero.webp",
    "ppt/media/image3.jpg": "eadrasha-map-context.webp",
    "ppt/media/image5.jpg": "eadrasha-pitch-visual.webp",
    "ppt/media/image6.png": "eadrasha-product-detail.webp",
}


def save_webp(image: Image.Image, path: Path, max_width: int = 1600) -> None:
    image = image.convert("RGB")
    if image.width > max_width:
        ratio = max_width / image.width
        image = image.resize((max_width, round(image.height * ratio)), Image.Resampling.LANCZOS)
    image.save(path, "WEBP", quality=82, method=6)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    logo = Image.open(ASSETS / "logo.png")
    save_webp(logo, OUT / "eadrasha-logo.webp", max_width=800)

    deck = ASSETS / "adrasha pitch deck.pptx"
    with ZipFile(deck) as archive:
        for entry, filename in MEDIA_MAP.items():
            if entry not in archive.namelist():
                continue
            image = Image.open(io.BytesIO(archive.read(entry)))
            save_webp(image, OUT / filename)


if __name__ == "__main__":
    main()
