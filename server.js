'use strict';

var express = require('express');
var mongoose = require('mongoose');
var multer = require('multer');
var upload = multer({
	dest: process.cwd() + '/public/uploads',
});
var routes = require('./app/routes/index.js');

var mongoUrl = process.env.MONGOLAB_URI;

var app = express();

mongoose.connect(mongoUrl);

routes(app);

var port = process.env.PORT || 5000;

app.listen(port, function (err){
	console.log('listening to port ' + port+ '...');
});