'use strict';

var path = process.cwd();

var multer = require("multer")
module.exports = function (app) {
	
	app.route('/')
		.get(function (req, res) {
		res.sendFile(path + '/public/index.html');
		});


	app.post('/metadata', multer({ dest: path+"/uploads/"}).single('upl'), function(req,res){
	res.send({"fileSize":req.file.size})
	
});
	
};
