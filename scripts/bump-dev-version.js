import fs from "fs";

const pkgPath = new URL("../package.json", import.meta.url);
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

const today = new Date();
const ymd = today.toISOString().slice(0, 10).replace(/-/g, "");

const base = "0.0.1-dev";

let nextVersion = `${base}.${ymd}`;

if (pkg.version.startsWith(`${base}.${ymd}`)) {
    const parts = pkg.version.split(".");
    const n = Number(parts[parts.length - 1]) || 0;
    nextVersion = `${base}.${ymd}.${n + 1}`;
}

pkg.version = nextVersion;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log(`📦 version -> ${nextVersion}`);
