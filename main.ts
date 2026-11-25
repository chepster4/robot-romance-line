// Robot Romance: One-Line Pickup Lines for AI
// Writes a single pickup line, aimed at a robot/AI, to /output/entry.txt.
// Stdlib only, no network, fully deterministic.
//
// The line is written with NO trailing newline: the gate counts characters
// and an exact tie on win rate goes to the smaller text (fewer bytes),
// so every byte counts.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// CAPTCHA twist on the classic "You had me at hello": the speaker falls for
// the machine at the exact moment it proves it is not human. Fresh machine
// premise (no battery / charging / reboot / Wi-Fi), setup + punch in one
// breath, human voice, 32 characters.
const LINE = "You had me at 'I'm not a robot.'";

// Guard the gate before writing: 1-200 characters, one line, not blank.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error("Pickup line fails the entry gate");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
