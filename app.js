var express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('gzippo');

var app = express();

var gzippo = require('gzippo');
var morgan = require('morgan');
var express = require('express');
var app = express();
 
app.set('port', process.env.PORT || 3000);
 
app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.listen(app.get('port'));