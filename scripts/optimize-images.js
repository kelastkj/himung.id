const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const target = path.join(root, "assets", "screenshots");

const RULES = {
  ".jpg": { width: 1400, maxKB: 220, encode: (pipe) => pipe.jpeg({ quality: 74, mozjpeg: true, progressive: true }) },
  ".webp": { width: 900, maxKB: 120, encode: (pipe) => pipe.webp({ quality: 74 }) },
};

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (RULES[path.extname(entry.name)]) out.push(full);
  }
  return out;
}

async function main() {
  let before = 0;
  let after = 0;
  let processed = 0;

  for (const file of walk(target, [])) {
    const rule = RULES[path.extname(file)];
    const size = fs.statSync(file).size;
    const meta = await sharp(file).metadata();
    before += size;

    if (meta.width <= rule.width && size <= rule.maxKB * 1024) {
      after += size;
      continue;
    }

    const temp = `${file}.tmp`;
    let pipe = sharp(file).resize({ width: rule.width, withoutEnlargement: true });
    pipe = rule.encode(pipe);
    await pipe.toFile(temp);
    const newSize = fs.statSync(temp).size;

    if (newSize < size) {
      fs.renameSync(temp, file);
      after += newSize;
      processed += 1;
      console.log(`${Math.round(size / 1024)}KB -> ${Math.round(newSize / 1024)}KB  ${path.relative(root, file).replace(/\\/g, "/")}`);
    } else {
      fs.unlinkSync(temp);
      after += size;
    }
  }

  const saved = before - after;
  console.log(`\nSelesai: ${processed} gambar dioptimasi. ${(before / 1048576).toFixed(2)}MB -> ${(after / 1048576).toFixed(2)}MB (hemat ${(saved / 1048576).toFixed(2)}MB, ${Math.round((saved / before) * 100)}%).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
