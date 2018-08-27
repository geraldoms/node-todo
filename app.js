var express = require("express");
var app = express();
var mongoose = require("mongoose");
var config = require("./config");
var todoController = require('./controllers/todoController');

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");
mongoose.connect(
  config.getDbConnectionString(),
  { useNewUrlParser: true }
);
todoController(app);

app.listen(port);
