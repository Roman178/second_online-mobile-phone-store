const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
// const middlewares = jsonServer.defaults({
//   static: "node_modules/json-server/public",
//   static: "tools/public",
// });

const fs = require("fs");

// Set default middlewares (logger, static, cors and no-cache)
server.use(
  jsonServer.defaults({
    static: "node_modules/json-server/public",
  })
);
server.use(jsonServer.defaults({ static: "tools/public" }));

// Add custom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use("/orders", (req, res, next) => {
  if (req.method === "POST") {
    console.log(req.body);
    // fs.writeFile("orders.json", JSON.stringify(orders), (err) => {
    //   console.log(orders);
    // });
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});

function createUrlName(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const path = require("path");
// const router = jsonServer.router(path.join(__dirname, "mockData.json"));

// // Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
// const middlewares = jsonServer.defaults({
//   // Display json-server's built in homepage when json-server starts.
//   static: "node_modules/json-server/public",
// });

// // Set default middlewares (logger, static, cors and no-cache)
// server.use(middlewares);

// // To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
// server.use(jsonServer.bodyParser);
// server.use((req, res, next) => {
//   if (req.method === "PUT") {
//     console.log(req.body);
//   }

//   next();
// });

// // Simulate delay on all requests
// server.use(function (req, res, next) {
//   setTimeout(next, 0);
// });

// // Use default router
// server.use(router);

// // Start server
// const port = 3001;
// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });
