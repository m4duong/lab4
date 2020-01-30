
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render("index", {
  	"projects": [
  	{ "name": "Waiting in Line",
  	  "image": "lorempixel.people.1.jpeg",
  	  "id": "project1"
 	},
 	{ "name": "Needfinding",
	  "image": "lorempixel.city.1.jpeg",
	  "id": "project2"
	},
	{ "name": "Prototyping",
	  "image": "images/lorempixel.technics.1.jpeg",
	  "id": "project3"
	},
	{ "name": "Heuristic Evaluation",
	  "image": "images/lorempixel.abstract.1.jpeg",
	  "id": "project4"
	},
	{ "name": "Visualization",
	  "image": "images/lorempixel.abstract.8.jpeg",
	  "id": "project5"
	},
	{ "name": " Social Design",
	  "image": "images/lorempixel.people.2.jpeg",
	  "id": "project6"
	},
	{ "name": "Gestural Interaction",
	  "image": "images/lorempixel.technics.2.jpeg",
	  "id": "project7"
	},
	{ "name": "Design Tools",
	  "image": "images/lorempixel.city.2.jpeg",
	  "id": "project8"
	}
	]
  });
};