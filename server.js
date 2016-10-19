var express  = require('express');
var app      = express();

app.get('/', function(req, res) {
  res.send('index', {
    // user: req.user
  });
});

console.log('process.env.PORT', process.env.PORT);
var port = process.env.PORT || 3010;

app.listen(port);
console.log('The magic happens on port ' + port);