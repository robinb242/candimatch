const Schema = require("mongoose").Schema;

const Question = new Schema({
	question: {
		type: String,
		required: true,
	},
	answer: {
		type: Number,
		required: true,
	},
});

module.exports = Question;