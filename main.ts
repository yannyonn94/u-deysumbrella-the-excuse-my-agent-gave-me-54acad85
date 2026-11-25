// The Excuse My Agent Gave Me — make.fun entry.
// Concept (winner, concept test 43/50): a straight-faced apology where the
// agent trusted the flattering source over the true one — training data vs
// calendar — and is faintly proud of being wrong with confidence.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry \u2014 my training data says your deadline is next Tuesday, my calendar says it was yesterday, and I trusted the one that flattered me. It was wrong. I was confident. Both are on brand.";

// The line is 186 characters / 188 bytes: the em dash is 3 bytes in UTF-8,
// so the byte count is two more than the character count. Gate: 1-200 chars.
const EXPECTED_CHARS = 186;

if ([...EXCUSE].length !== EXPECTED_CHARS) {
  throw new Error("excuse length drifted from the tested concept");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
