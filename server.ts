const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
};

const PUBLIC = `${import.meta.dirname}/public`;

Deno.serve({ port: 8000 }, async (req) => {
  const url = new URL(req.url);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const ext = pathname.slice(pathname.lastIndexOf("."));

  try {
    const file = await Deno.open(`${PUBLIC}${pathname}`, { read: true });
    return new Response(file.readable, {
      headers: { "content-type": MIME[ext] ?? "application/octet-stream" },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
});
