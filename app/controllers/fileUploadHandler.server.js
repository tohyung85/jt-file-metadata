'use strict';

var File = require('../models/file.js');

function fileUploadHandler (app) {

	this.uploadFile = function (req, res) {
		var newFile = new File();
		newFile.fileName = req.file.originalname;
		newFile.when = new Date();

		newFile.save(function(err){
			if (err) {throw err; }

			if (req.file) {
				console.log('upload success');
				res.json(req.file);	
			} else {
				console.log('upload fail');
				res.json('upload fail');
			}
			
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