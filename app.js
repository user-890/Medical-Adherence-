var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

mongoose.connect("mongodb://localhost/medication_adherence_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));


var patientSchema = new mongoose.Schema ({
	name: String,
	image: String,
	created: {type: Date, default: Date.now}
});


var Patient = mongoose.model("Patient", patientSchema);


var medicationSchema = new mongoose.Schema ({
	medicationName: String,
	date: Date,
	desc: String
});

var Medication = mongoose.model("Medication", medicationSchema);


// Patient.create({
// 	name: "John Doe",
// 	image: "https://images.unsplash.com/photo-1492899607222-5d9ac07b82f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=21c014ba8260002710d0de53be3bc7ab&auto=format&fit=crop&w=800&q=60"
// });


// Medication.create({
// 	medicationName: "Plavix",
// 	Date: 03/11/2018,
// 	desc: "Blood thinner."
// });



// Restful Routes


app.get("/login", function(req, res){
	res.render("login");
});



app.get("/main", function(req, res){
	res.render("main");
});


app.get("/users", function(req, res){
	Patient.find({}, function(err, user){
		if(err){
			console.log(err);
		} else {
			res.render("users", {user: user})
		}
	});
});


// NEW - show form to create new medication entry
app.get("/new", function(req, res){
	res.render("new");
});


// SHOW 
app.get("/medication-list/:id", function(req, res){
	Medication.find({}, function(err, medication){
		if(err){
			console.log(err);
		} else{
			res.render("medication-list", {medication: medication});
		}
	});
	
});



app.listen(3000, function(){
	console.log("App is running!");
});
