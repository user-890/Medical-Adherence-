var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest", 
		image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=45fc8a446ad11a120c543c426382119f&auto=format&fit=crop&w=1350&q=80",
		description: "Turkey alcatra boudin ball tip short loin pork t-bone tri-tip kielbasa bacon pork belly beef ribs short ribs chuck tail. Meatball kielbasa capicola bacon pancetta spare ribs short ribs beef sausage. Filet mignon meatloaf buffalo pork bacon, chuck turkey beef tri-tip strip steak. Rump filet mignon doner meatball landjaeger, turkey sirloin kevin spare ribs venison picanha pork drumstick. Fatback ground round rump doner ball tip t-bone andouille pastrami, frankfurter short loin tongue."
	},
	{
		name: "Desert Mesa", 
		image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-0.3.5&s=dd23e6038cd7a8421453675bd5695062&auto=format&fit=crop&w=600&q=60",
		description: "Ball tip capicola leberkas fatback, ham t-bone pork cupim cow jerky buffalo. Alcatra salami landjaeger capicola, turducken turkey drumstick boudin cupim burgdoggen buffalo. Bacon picanha short loin, swine doner pork belly andouille porchetta shankle pancetta ham prosciutto. Meatloaf fatback short ribs, ham hock ball tip alcatra kielbasa swine sausage pork belly biltong. Pancetta tri-tip cupim, ground round venison pork loin salami drumstick bacon chuck strip steak kevin. Shankle bacon fatback pork chop filet mignon, drumstick tongue tri-tip prosciutto doner ball tip chicken."
	},
	{
		name: "Canyon Floor", 
		image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c80f31bb4040015d51db663252fbd30&auto=format&fit=crop&w=600&q=60",
		description: "Drumstick short loin hamburger strip steak. Bresaola alcatra kielbasa pork chop turkey kevin. Chuck tri-tip jerky, beef shoulder beef ribs bacon fatback flank brisket. Buffalo salami shankle jowl kevin pork turducken, turkey ball tip bresaola pancetta burgdoggen ribeye. Swine shoulder short loin sirloin cupim spare ribs beef frankfurter meatball pastrami leberkas jerky rump salami."
	}
	
]

function seedDB(){
	// wipe database
	Campground.remove({}, function(err){

		if(err){
			console.log(err);
		} 

		console.log("removed users!");
		data.forEach(function(seed){
			Campground.create(seed, function(err, user){
				if(err){
					console.log(err);
				} else {
					console.log("Added a user");
					// create a comment 
					Comment.create({
						text: "This is place is the best! I'm so happy you went",
						author: "Tiloooor"
					}, function(err, comment){
						if(err) {
							console.log(err);
						} else {
							if(err){
								console.log(err)
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log("Created new comment!");
							}
						}
					})
				}
			});
		});
	});
	// add a few campgrounds 
}


module.exports = seedDB;