const mongoose = require('mongoose')

//create a mongoose schema
const issuesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	registrationId: {
		type: Number,
		required: true,
	},
	class: String,
	course: String,
	department: String,
	title: String,
	contacts: String,
	description: String,
	file: String,
	date:{
		type:Date,
		default: ()=> new Date().toLocaleString('en-US',{timeZone: 'GMT'})
	},
	status: {
		type: String,
		default: 'never attended',
	}, 
	deligated_to: {
		type: String,
		default: 'none',
	},
	
});

//create a mongoose model based on the schema
const issuesModel = mongoose.model('issues', issuesSchema);

module.exports = issuesModel
