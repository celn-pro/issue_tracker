const mongoose = require('mongoose')

//create a mongoose schema
const issuesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	registrationId: {
		type: String,
		required: true,
	},
	class: String,
	course: String,
	department: String,
	title: String,
	contacts: String,
	description: {
		type: String,
		ref: 'descriptions',
	},
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
		ref: 'staffs',
		default: 'none',
	},
	
});

//create a mongoose model based on the schema
const issuesModel = mongoose.model('issues', issuesSchema);

module.exports = issuesModel
