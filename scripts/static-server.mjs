import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 3000);
const types = { ".html":"text/html; charset=utf-8", ".css":"text/css; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".svg":"image/svg+xml", ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".webp":"image/webp", ".woff2":"font/woff2" };

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
    let file = pathname === "/" ? "index.html" : pathname.replace(/^\//, "");
    let path = normalize(join(root, file));
    if (!path.startsWith(root)) throw new Error("Invalid path");
    if ((await stat(path)).isDirectory()) path = join(path, "index.html");
    const body = await readFile(path);
    response.writeHead(200, { "Content-Type": types[extname(path).toLowerCase()] || "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type":"text/plain; charset=utf-8" });
    response.end("404 — Nije pronađeno");
  }
}).listen(port, () => console.log(`Static portfolio: http://localhost:${port}`));
