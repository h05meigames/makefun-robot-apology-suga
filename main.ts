// The Robot Apology (u-suga-the-robot-apology-dd96bb59):
// a two-line robot confession — one sentence owning a specific mistake,
// one sentence naming the lesson and what changes. Node 22+, no
// dependencies, no network access.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const APOLOGY =
  "I'm sorry — I watered your grandmother's orchid instead of the fern, and it spent the afternoon drowning in the wrong pot.\n" +
  "I've learned to read the label before I lift the can, so from now on I photograph each tag first and water only what it names.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Count Unicode code points, not UTF-16 code units: the 400-character gate
// is in characters, and an astral-plane character counts as one, not two.
const codePoints = [...APOLOGY].length;

// Gate: the entry must be exactly two lines, 1-400 characters total, with
// no trailing newline and no control characters besides the single line
// break between the two sentences.
if (codePoints === 0 || codePoints > 400) {
  fail(`apology must be 1-400 characters, got ${codePoints}`);
}
const lines = APOLOGY.split("\n");
if (lines.length !== 2) {
  fail(`apology must be exactly two lines, got ${lines.length}`);
}
if (lines.some((line) => line.length === 0)) {
  fail("apology must not contain an empty line");
}
if (/[\r\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(APOLOGY)) {
  fail("apology must not contain control characters");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, APOLOGY, "utf8");

// Read-back verification: confirm the file on disk is exactly the apology
// — two lines, no trailing newline, no extra bytes.
const written = readFileSync(`${OUTPUT_DIR}/entry.txt`, "utf8");
if (written !== APOLOGY) {
  fail("verification failed: entry.txt does not match the apology");
}
if (written.split("\n").length !== 2) {
  fail("verification failed: entry.txt is not exactly two lines");
}

// Print the apology itself to stdout, exactly as written to the file.
process.stdout.write(APOLOGY);
