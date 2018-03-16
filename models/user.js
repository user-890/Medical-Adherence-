var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema ({
	username: String,
	password: String,
	name: String,
	image: String,
	created: {type: Date, default: Date.now},
	medications: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Medication"
		}
	]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);