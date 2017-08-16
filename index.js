const express = require("express");
const path    = require("path");
const mustacheExpress = require("mustache-express");
const data    = require("./data.js");

const app = express();

app.use("/public", express.static("public"));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function (req, res) {
  // TODO write your code here
  res.render("index", data);
  console.log(req.params.id);
})

app.get('/listing/:id', function (req, res) {
  // TODO write your code here
  console.log(req.params.id);
  res.render("listing", req.params.id);
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
