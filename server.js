const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      name: "Sundhar",
      message: "Docker API Working",
      status: "success"
    }));
  } else {
    res.end("Hello Sundhar Docker Working!");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});