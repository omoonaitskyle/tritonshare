var data = require("../majors.json");

exports.addFriend = function(req, res) { 
    var x = req.query.name;
    var y = req.query.description;
    var z = 'http://lorempixel.com/400/400/people';
    data["majors"].push({name: x, description: y, imageURL: z});
    res.render('index',data);
}

exports.view = function(req, res){
	console.log(data);
	res.render('index',data);
};