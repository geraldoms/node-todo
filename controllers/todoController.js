var Todos = require("../models/todoModel");
var bodyParser = require("body-parser");

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/api/todos", function(req, res) {
    Todos.find({}, function(err, results) {
      if (err) throw err;
      res.send(results);
    });
  });

  app.get("/api/todos/:username", function(req, res) {
    Todos.find({ username: req.params.username }, function(err, results) {
      if (err) throw err;
      res.send(results);
    });
  });

  app.get("/api/todo/:id", function(req, res) {
    Todos.findById({ _id: req.params.id }, function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.post("/api/todo", function(req, res) {
    var body = req.body;
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, body, function(err, result) {
        if (err) throw err;
        res.send("Success!");
      });
    } else {
      body.username = "todo01";
      var newTodo = Todos(body);
      newTodo.save(function(err) {
        if (err) throw err;
        res.send("Success!");
      });
    }
  });

  app.delete("/api/todo/:id", function(req, res) {
    Todos.findByIdAndRemove(req.params.id, function(err) {
      if (err) throw err;
      res.send("Success!");
    });
  });
};
