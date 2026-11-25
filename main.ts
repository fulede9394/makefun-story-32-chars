// A Wi-Fi name that explains why the neighbours moved out.
// Thirty-two characters, one story, zero survivors on the network.
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const ssidStory = "FBI_Van_4_And_Now_So_Are_We";

const storyBudget = 32;

function checkStory(text: string): void {
  if (text.length > storyBudget) {
    throw new Error(`story is ${text.length} chars, budget is ${storyBudget}`);
  }
  if (text.includes(" ")) throw new Error("story must have no spaces");
  if (!text.includes("FBI_Van_4")) throw new Error("story lost its van");
  if (!text.startsWith("FBI")) throw new Error("story must start with FBI");
}

async function tell(text: string): Promise<void> {
  checkStory(text);
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await mkdir(folder, { recursive: true });
  await writeFile(resolve(folder, "entry.txt"), text, "utf8");
}

void tell(ssidStory);
