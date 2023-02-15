# Proxy Cloudflare Server

- Send a **POST** request to your endpoint.
- Post your data in the body of your request, see the example below.
- The response from the server will be in binary, so read the response as `blob()`.

### Example:

```js
let payload = { url: "your url", method: "GET | POST ...", body: "your content", headers: "your headers" };

let response = await fetch(proxyUrl, { method: "POST", body: JSON.stringify(payload) });

let data = await response.blob();
```
