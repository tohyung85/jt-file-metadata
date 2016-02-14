'use strict';

var express = require('express');
var mongoose = require('mongoose');
var multer = require('multer');
var routes = require('./app/routes/index.js');

var app = express();

routes(app);

app.listen(5000, function (err){
	console.log('listening to port 5000...');
});