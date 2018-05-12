const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	questions: [{
		type: Schema.Types.ObjectId,
		ref: "Question",
	}],
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;

	