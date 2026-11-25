// A Wi-Fi name that explains why the neighbours moved out.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "FBI_Van_4_And_Now_So_Are_We";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
