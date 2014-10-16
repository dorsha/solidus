var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    favicon = require('serve-favicon'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('gzippo');

var app = express();

var env = process.env.NODE_ENV || 'development';
if ('development' == env){
  app.use(errorHandler());
}

app.set('port', process.env.PORT || 5000);
app.set('views', 'dist/views');
//app.set('view engine', 'jade');
app.use(favicon("dist/favicon.ico"));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(gzippo.staticGzip("dist"));

//app.use(express.static(path.join(__dirname, 'dist')));

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});