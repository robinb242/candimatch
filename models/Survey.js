const Schema = require("mongoose").Schema;

const Survey = new Schema({
	title: {
		type: String,
		required: true,
	},
	questions: {
		type: Schema.Types.ObjectId,
		ref: "Quesiton",
	},
});

module.exports = Survey;

	