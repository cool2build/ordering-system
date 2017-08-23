var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log('is listening to ' + port + '!');
});