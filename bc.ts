import { sendWebhook } from "./lib/sender.ts";

const id = Deno.args[0];
const content = Deno.args.reduce((a, b, i) => {
  if (i === 0) return "";
  if (i === 1) return b;
  return a + b;
});

sendWebhook(id, content);
