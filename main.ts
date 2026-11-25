import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Tagline for make.fun: three beats — enter, ship, get paid —
// each naming one thing the site actually does, so the line
// could only sell this bounty board and nothing else.
const LINE = "Enter a bounty. Ship the best entry. Get paid in the open.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
