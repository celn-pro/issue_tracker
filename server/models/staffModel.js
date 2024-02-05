const mongoose =  require('mongoose')

const staffSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	department: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	}, 
	profileImg: String,
})

const staffModel = mongoose.model('staffs', staffSchema)

module.exports = staffModel