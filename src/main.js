require("dotenv").config();
const express = require("express");
const path = require("path");

console.log(">>check env", process.env);

const app = express();
const port = process.env.PORT || 8181;
const hostname = "localhost";

// config template engine
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
//config static file
app.use(express.static(path.join(__dirname, "public")));

// khai báo route
app.get("/", (req, res) => {
  res.render("samp");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});
