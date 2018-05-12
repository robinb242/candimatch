const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	surveys: [{
		type: Schema.Types.ObjectId,
		ref: "Survey",
	}],
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	candidate: {
		type: Boolean,
		required: true,
		default: false,
	},
	
});

const User = mongoose.model('User', userSchema);

module.exports = User;