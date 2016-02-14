'use strict';

var File = require('../models/file.js');

function fileUploadHandler (app) {

	this.uploadFile = function (req, res) {
		var newFile = new File();
		newFile.fileName = 'testFilename';
		newFile.when = new Date();

		newFile.save(function(err){

			if (err) {throw err; }

			res.send('file saved');
		});
	}

	this.latestFileUploads = function(req, res) {

		File
			.find({}, {'_id': false})
			.exec(function(err, result){
				if (err) {throw err; }
				if (result.length === 0) {
					res.send('no files saved yet');
				} else {
					res.json(result);	
				}					
			});	
	}
}

module.exports = fileUploadHandler;