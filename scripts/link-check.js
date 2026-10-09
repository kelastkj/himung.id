const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const SKIP_DIRS = new Set([".git", ".commandcode", "node_modules", "partials", "scripts"]);

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name), out);
    } else if (entry.name.endsWith(".html")) {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

const attrRe = /(?:href|src)\s*=\s*"([^"]+)"/g;
const problems = [];

for (const file of walk(root, [])) {
  const html = fs.readFileSync(file, "utf8");
  let match;
  while ((match = attrRe.exec(html))) {
    const url = match[1].trim();
    if (/^(https?:|mailto:|tel:|data:|#|javascript:)/i.test(url)) continue;
    const clean = url.split("#")[0].split("?")[0];
    if (!clean) continue;
    const target = clean.endsWith("/")
      ? path.join(path.resolve(path.dirname(file), clean), "index.html")
      : path.resolve(path.dirname(file), clean);
    if (!fs.existsSync(target)) {
      problems.push(`${path.relative(root, file).replace(/\\/g, "/")} -> ${url}`);
    }
  }
}

if (problems.length) {
  console.error(`Tautan/aset lokal tidak ditemukan (${problems.length}):`);
  problems.forEach((problem) => console.error(`  - ${problem}`));
  process.exit(1);
}
console.log("OK: semua tautan dan aset lokal ditemukan.");
