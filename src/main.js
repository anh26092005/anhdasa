require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const WebRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 8181;
const hostname = "localhost";
// config template engine
const configViewEngine = require("./config/viewEngine");
//config static file

configViewEngine(app);
//create the connection to  database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});
// A simple SELECT query
connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log("Kết quả:", results);
  console.log("Thông tin fields:", fields);
});
// khai báo route
app.use("/test", WebRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});
