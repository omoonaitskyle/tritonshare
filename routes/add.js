var data = require("../data.json");

exports.addFriend = function(req, res) { 
    var x = req.query.name;
    var y = req.query.description;
    var z = req.query.link;
    data["friends"].push({name: x, description: y, link: z});
    res.render('add');
}