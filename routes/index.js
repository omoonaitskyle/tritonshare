// Get all of the majors from json file
var data = require('../majors.json');


exports.view = function(req, res){
	res.render('index', data);
};