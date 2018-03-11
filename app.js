var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));





app.get("/", function(req, res){
	res.render("login");
});

app.get("/main", function(req, res){
	res.render("main");
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.get("/calender/:id", function(req, res){
	res.render("calender");
});

app.listen(3000, function(){
	console.log("App is running!");
});
