var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var Med = new mongoose.Schema({
	medicationName: {type: String, default: ''},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema'},
	createdAt: {type: Date, default: Date.now},
	desc: {type: String, default: ''}
})


var UserSchema = new mongoose.Schema ({
	username: String,
	password: String,
	name: String,
	image: String,
	created: {type: Date, default: Date.now},
	medications: [Med]
});



UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);