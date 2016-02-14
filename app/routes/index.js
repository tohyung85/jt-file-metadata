'use strict';

var FileUploadHandler = require('../controllers/fileUploadHandler.server.js');

module.exports = function(app) {

	var fileUploadHandler = new FileUploadHandler();

	app.route('/picture/upload')
		.post(fileUploadHandler.uploadFile);

	app.route('/uploads')
		.get(fileUploadHandler.latestFileUploads);

	app.route('/')
		.get(function (req, res){
			res.sendFile(process.cwd() + '/public/index.html');
		});

	
}