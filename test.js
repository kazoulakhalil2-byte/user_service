const http = require("http");

const options = { hostname: "localhost", port: 3000, path: "/health", method: "GET" };
const req = http.request(options, res => {
  if (res.statusCode === 200) console.log("✅ TEST PASSED");
  else console.log("❌ TEST FAILED");
  process.exit(res.statusCode === 200 ? 0 : 1);
});
req.on("error", err => console.error("TEST ERROR:", err.message));
req.end();
