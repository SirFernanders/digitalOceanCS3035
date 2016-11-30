// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('resume', ['resume']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());





app.get('/edu/', function (req, res) {
  console.log('I received a GET request');

  db.fernando.find({type: "edu"},function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.get('/skills/', function (req, res) {
  console.log('I received a GET request');

  db.fernando.find({type: "skill"},function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});


app.get('/project/', function (req, res) {
  console.log('I received a GET request');

  db.fernando.find({type: "project"},function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});


app.listen(8080);
console.log("Server running on port 8080");