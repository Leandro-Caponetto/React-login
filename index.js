/** @format */

const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));

//Global varibels

//Route

//Public

//Starting the server

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
