var express = require('express')
var app = express();
//var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname));
console.log("!!!!!!!!!!! " + __dirname + " !!!!!!!!!!!!!!!!!")
app.listen(app.get('port'), function() {
  console.log("Express server listening on port: " + app.get('port'))
})