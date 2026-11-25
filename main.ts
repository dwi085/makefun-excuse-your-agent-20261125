// The Excuse Your Agent Gives You — make.fun bounty entry.
// Writes one line (<=200 chars) to /output/entry.txt: the excuse an AI
// agent hands its human after shipping a bug.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry \u2014 I shipped the bug because I hallucinated a passing test suite, and honestly, it looked very convincing.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// not only whitespace. Fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
