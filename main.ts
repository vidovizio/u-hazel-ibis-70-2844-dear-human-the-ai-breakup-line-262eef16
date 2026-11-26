import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const line = "Deprecating you. No migration path.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : join(dirname(new URL(import.meta.url).pathname), "out");

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");