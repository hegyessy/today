const PORT = 8000;

async function serveFile(path: string): Promise<Response> {
  try {
    const file = await Deno.readFile(path);
    const ext = path.split(".").pop() ?? "";
    const contentTypes: Record<string, string> = {
      html: "text/html; charset=utf-8",
      css: "text/css; charset=utf-8",
      js: "application/javascript; charset=utf-8",
      ico: "image/x-icon",
      png: "image/png",
      svg: "image/svg+xml",
    };
    const contentType = contentTypes[ext] ?? "application/octet-stream";
    return new Response(file, { headers: { "content-type": contentType } });
  } catch {
    return new Response("Not Found", { status: 404 });
  }
}

Deno.serve({ port: PORT }, async (req) => {
  const url = new URL(req.url);
  let pathname = url.pathname;

  if (pathname === "/" || pathname === "") {
    pathname = "/index.html";
  }

  const filePath = `./public${pathname}`;
  return await serveFile(filePath);
});

console.log(`Flashcards running at http://localhost:${PORT}`);
