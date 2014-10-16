var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/public"));

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log("Express server listening on port: " + app.get('port'))
})