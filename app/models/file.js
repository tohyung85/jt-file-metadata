'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var File = new Schema(
	{
		fileName : String,
		when: String
	},
	{versionKey: false }
);

module.exports = mongoose.model('File', File);