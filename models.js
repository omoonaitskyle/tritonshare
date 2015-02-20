
var Mongoose = require('mongoose');

var projects_json = require('./projects.json');


var ProjectSchema = new Mongoose.Schema({
  "title": String,
  "date": String,
  "summary": String,
  "image": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


exports.init = function() {
  var RESET_THE_DATABASE = false;

  if(RESET_THE_DATABASE) {
    exports.Project.find().remove().exec(initializeProjects);
  } else {
    initializeProjects();
  }

  function initializeProjects() {
    exports.Project.find(function(err, projects) {
      if(!projects || projects.length === 0) {
        console.log('No projects found. Initializing the Projects.');
        for(var i=0; i<projects_json.length; i++) {
          var json = projects_json[i];
          var proj = new exports.Project(json);
          proj.save(function(err, proj) {
            if(err) {
              console.log(err);
            }
          });
        }
      }
    });
  }
}