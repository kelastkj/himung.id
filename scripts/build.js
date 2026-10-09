const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = path.join(__dirname, "..");
const checkOnly = process.argv.includes("--check");

const SKIP_DIRS = new Set([".git", ".github", ".commandcode", "node_modules", "partials", "scripts", "css", "js", "assets"]);

function walk(dir, filter, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name), filter, out);
    } else if (filter(entry.name)) {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

function hashFile(file) {
  return crypto.createHash("sha1").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
}

function collectAssets(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectAssets(full, out);
    else if (/\.(css|js|svg)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const assetHashes = new Map();
for (const dir of ["css", "js", "assets"]) {
  for (const file of collectAssets(path.join(root, dir), [])) {
    assetHashes.set(path.relative(root, file).replace(/\\/g, "/"), hashFile(file));
  }
}

const headerPartial = fs.readFileSync(path.join(root, "partials", "header.html"), "utf8").trimEnd();
const footerPartial = fs.readFileSync(path.join(root, "partials", "footer.html"), "utf8").trimEnd();
const headPartial = fs.readFileSync(path.join(root, "partials", "head.html"), "utf8").trimEnd();

function activeFor(rel) {
  if (rel === "index.html") return "beranda";
  if (rel.startsWith("aplikasi/")) return "produk";
  if (rel.startsWith("lab/")) return "lab";
  if (rel.startsWith("tentang/")) return "tentang";
  if (rel.startsWith("kontak/")) return "kontak";
  return "";
}

function markActive(html, active) {
  return html.replace(/<a([^>]*?)data-nav="([^"]+)"([^>]*?)>/g, (full, before, nav, after) => {
    let attrs = (before + " " + after).replace(/\s+/g, " ").trim();
    if (nav === active) {
      if (/\bclass="/.test(attrs)) attrs = attrs.replace(/class="([^"]*)"/, 'class="$1 active"');
      else attrs = 'class="active" ' + attrs;
      attrs += ' aria-current="page"';
    }
    return `<a ${attrs}>`;
  });
}

const pages = walk(root, (name) => name.endsWith(".html"), []).sort();
const drift = [];
let written = 0;

for (const file of pages) {
  const rel = path.relative(root, file).replace(/\\/g, "/");
  const depth = rel.split("/").length - 1;
  const base = depth === 0 ? "./" : "../".repeat(depth);
  const active = activeFor(rel);

  let header = headerPartial.split("{{base}}").join(base);
  header = header.split("{{logo}}").join(rel === "index.html" ? " data-logo" : "");
  header = markActive(header, active);

  let footer = footerPartial.split("{{base}}").join(base);
  const icons = headPartial.split("{{base}}").join(base);

  const original = fs.readFileSync(file, "utf8");
  let output = original;
  output = output.replace(/[ \t]*<header class="site-header">[\s\S]*?<\/header>/, header);
  output = output.replace(/[ \t]*<footer class="site-footer">[\s\S]*?<\/footer>/, footer);
  output = output.replace(/[ \t]*<link rel="icon"[^>]*>(?:\s*<link rel="apple-touch-icon"[^>]*>)?(?:\s*<link rel="manifest"[^>]*>)?/, icons);
  output = output.replace(/(href|src)="([^"]+?)\.(css|js|svg)(\?[^"]*)?"/g, (full, attr, stem, ext, query) => {
    const url = `${stem}.${ext}`;
    if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith("//")) return full;
    const abs = path.resolve(path.dirname(file), url);
    const key = path.relative(root, abs).replace(/\\/g, "/");
    const hash = assetHashes.get(key);
    if (!hash) return full;
    return `${attr}="${url}?v=${hash}"`;
  });

  if (output === original) continue;

  if (checkOnly) {
    drift.push(rel);
  } else {
    fs.writeFileSync(file, output);
    written += 1;
    console.log(`build  ${rel}`);
  }
}

if (checkOnly) {
  if (drift.length) {
    console.error("HTML tidak sinkron dengan partial. Jalankan `npm run build` pada file berikut:");
    drift.forEach((file) => console.error(`  - ${file}`));
    process.exit(1);
  }
  console.log(`OK: ${pages.length} halaman sinkron dengan partial dan aset.`);
} else {
  console.log(`Selesai: ${written} dari ${pages.length} halaman diperbarui.`);
}
