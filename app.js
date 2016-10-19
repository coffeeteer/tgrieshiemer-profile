'use strict';

var express  = require('express');
var app      = express();
var http     = require('http');

app.use(express.static(process.cwd() + 
	'/public'));

app.get('/', function(req, res) {
  res.send('index');
});

console.log('process.env.PORT', process.env.PORT);
var port = process.env.PORT || 3010;

app.listen(port);
console.log('The magic happens on port ' + port);

