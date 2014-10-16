var express = require('express'),
    morgan = require('morgan'),
    http = require('http'),
    path = require('path');
    //gzippo = require('gzippo');

var app = express();

app.set('port', process.env.PORT || 5000);
app.use(morgan('dev'));
//app.use(gzippo.staticGzip("" + __dirname + "/dist"));

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});