'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})



/**
	function getQueryVariable(variable)
	{
	  var query = window.location.search.substring(1);
	  var vars = query.split("&");
	  for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	    if(pair[0] == variable){return pair[1];}
	  }
	  return(false);
	}
	**/

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

/**
	var r = getQueryVariable("r");

	alert(r); // outputs 'Ancho-Chile-Sauce'

	function changePic() {
	  document.getElementById("recipe").src = r;
	}
**/


	$('.project a').click(function(e) {
		// Prevent following the link
		e.preventDefault();

		// Get the div ID, e.g., "project3"
		var projectID = $(this).closest('.project').attr('id');
		// get rid of 'project' from the front of the id 'project3'
		var idNumber = projectID.substr('project'.length);

		// this is the URL we'll call
		var url_call = '/project/'+idNumber;

		// How to respond to the GET request
		function addProjectDetails(project_json) {

			var new_html =
				'<div class="project-summary">'+
				'<b>URL: </b>' + 
				'<a href="http://' + 
				project_json['image'] +
				'">' + 
				project_json['image'] + 
				'</a>' +  
				'<br>' +
				'<b>Description: </b>' + 
				project_json['summary'] + 
				'<br>' +
				'<button class="project-delete btn btn-default" '+
					'type="button">remove</button>';
				'</div>'+
				//'<div class="project-summary">'+
				//'</div>'+
				'<button class="project-delete btn btn-default" '+
					'type="button">remove</button>';

			// get the DIV to add content to
			var details_div = $('#project' + idNumber + ' .details');
			// add the content to the DIV
			details_div.html(new_html);

			details_div.find('.project-delete').click(function(e) {
				$.post('/project/'+idNumber+'/delete', function() {
					//window.location.href = '/resources';
					location.reload()
				});
			});
		}

		// issue the GET request
		$.get(url_call, addProjectDetails);
	});

	$('#newProjectSubmitButton').click(function(e) {
		console.log('clicked');
		var title = $('#new-project-form #title').val();
		var image_url = $('#new-project-form #image_url').val();
		var date = $('#new-project-form #date').val();
		var summary = $('#new-project-form #summary').val();
		var summary2 = $('#new-project-form #summary').val();
		/*
		var json = {
			'project_title': title,
			'image_url': image_url,
			'date':  date,
			'summary': summary,
			'summary2': summary2
		};
		*/

		var json = {
			'title': title,
			'date': date,
			'summary': summary,
			'image': image_url 
		};

		$.post('/project/new', json, function() {
			window.location.href = '/resources'; // reload the page
		});
	});


}

