var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    favicon = require('serve-favicon'),
    routes = require('routes'),
    user = require('routes/user'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('gzippo');

var app = express();

var env = process.env.NODE_ENV || 'development';
if ('development' == env){
  app.use(errorHandler());
}

app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});