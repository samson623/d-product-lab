import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "public", "apps");

test("portfolio defines ten unique product demos", async () => {
  const source = await readFile(path.join(root, "app", "products.ts"), "utf8");
  const slugs = [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
  assert.equal(slugs.length, 10);
  assert.equal(new Set(slugs).size, 10);
});

test("all ten normalized HTML demos exist and are structurally valid", async () => {
  const files = (await readdir(appDir)).filter((file) => file.endsWith(".html")).sort();
  assert.equal(files.length, 10);
  for (const file of files) {
    const html = await readFile(path.join(appDir, file), "utf8");
    assert.match(html, /<title>[^<]+<\/title>/i, `${file} needs a title`);
    assert.match(html, /<meta[^>]+name=["']viewport["']/i, `${file} needs viewport metadata`);
    assert.doesNotMatch(html, /gumroad\.com\/l\/YOUR-PRODUCT|buy\.stripe\.com\/YOUR_PAYMENT_LINK/, `${file} contains placeholder commerce`);
    const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
    assert.equal(ids.length, new Set(ids).size, `${file} contains duplicate IDs`);
    const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map((match) => match[1]).filter(Boolean);
    for (const script of scripts) assert.doesNotThrow(() => new Function(script), `${file} contains invalid inline JavaScript`);
  }
});

test("the homepage contains working portfolio sections", async () => {
  const page = await readFile(path.join(root, "app", "page.tsx"), "utf8");
  for (const id of ["products", "approach", "work"]) assert.match(page, new RegExp(`id=\\"${id}\\"`));
  assert.doesNotMatch(page, /href=\{?["']#["']/);
});
