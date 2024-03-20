const express = require("express");
const bookRoute = require("./books.route");
const authorRoute = require("./authors.route")
const logger = require("./logger");

const app = express();
// MiddleWare
app.use(express.json());
app.use(logger);
app.use(express.static("public")); // extra to the class

app.use("/authors", authorRoute)
app.use("/books", bookRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*", (req, res) => {
  res.status(404).jsonp({ message: "Page not found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000: Express.js");
});