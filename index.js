var express = require('express')
var app = express();
//var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/dist'));
console.log("!!!!!!!!!!! " + __dirname + '/dist' + " !!!!!!!!!!!!!!!!!")
app.listen(app.get('port'), function() {
  console.log("Express server listening on port: " + app.get('port'))
})