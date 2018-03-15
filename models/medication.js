var mongoose = require("mongoose");

var medicationSchema = new mongoose.Schema ({
	medicationName: String,
	date: Date,
	desc: String
});

module.exports = mongoose.model("Medication", medicationSchema);