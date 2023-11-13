import { readLines } from "https://deno.land/std/io/mod.ts";
import { writeAllSync } from "https://deno.land/std/streams/mod.ts";
import { sendWebhook } from "./lib/sender.ts";

const prompt = new TextEncoder().encode("> ");
writeAllSync(Deno.stdout, prompt);

for await (let line of readLines(Deno.stdin)) {
  const args = line.split(" ");
  const id = args[0];
  const content = args.reduce((a, b, i) => {
    if (i === 0) return "";
    if (i === 1) return b;
    return a + b;
  });

  sendWebhook(id, content);

  const prompt = new TextEncoder().encode("> ");
  writeAllSync(Deno.stdout, prompt);
}
