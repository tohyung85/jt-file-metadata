'use strict';

var FileUploadHandler = require('../controllers/fileUploadHandler.server.js');
var multer = require('multer');
var upload = multer({
	dest: process.cwd() + '/public/uploads',
});


module.exports = function(app) {

	var fileUploadHandler = new FileUploadHandler();

	app.post('/pictures/uploads', upload.single('image'), fileUploadHandler.uploadFile);

	app.route('/uploads')
		.get(fileUploadHandler.latestFileUploads);

	app.route('/')
		.get(function (req, res){
			res.sendFile(process.cwd() + '/public/index.html');
		});
	
}