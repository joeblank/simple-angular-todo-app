var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));
app.use(cors());

var port = 3000;
app.listen(3000, function() {
  console.log('listening to port: ' + port);
})
