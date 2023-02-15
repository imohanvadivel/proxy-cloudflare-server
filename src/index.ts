export default {
  async fetch(request: Request): Promise<Response> {
    let reqUrl = await new URL(request.url);

    if (reqUrl.pathname !== "/" || request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    let { url, method, body, headers } = await request.json();

    let res = await fetch(url, { method, body, headers });
    let result = await res.blob();

    return new Response(result, {
      status: 200,
      headers: { "Content-Type": "application/octet-stream", "Access-Control-Allow-Origin": "*" },
    });
  },
};
