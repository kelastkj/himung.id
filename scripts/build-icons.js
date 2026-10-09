const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const iconsDir = path.join(root, "assets", "icons");

const mark = fs.readFileSync(path.join(iconsDir, "mark.svg"));
const maskable = fs.readFileSync(path.join(iconsDir, "mark-maskable.svg"));

const targets = [
  { source: mark, file: "icon-192.png", size: 192 },
  { source: mark, file: "icon-512.png", size: 512 },
  { source: maskable, file: "apple-touch-icon.png", size: 180 },
  { source: maskable, file: "maskable-512.png", size: 512 },
];

async function main() {
  for (const target of targets) {
    await sharp(target.source, { density: 620 })
      .resize(target.size, target.size, { fit: "contain" })
      .png()
      .toFile(path.join(iconsDir, target.file));
    console.log(`icon  ${target.file} (${target.size}px)`);
  }
  console.log(`Selesai: ${targets.length} ikon dibuat.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
