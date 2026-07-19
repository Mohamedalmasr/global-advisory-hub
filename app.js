const { createServer } = require("http");
const next = require("next");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res).catch((err) => {
      console.error("Request error:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    });
  }).listen(port, () => {
    console.log(`ForteBethel ready on port ${port}`);
  });
});
