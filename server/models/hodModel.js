const mongoose =  require('mongoose')

const hodSchema = new mongoose.Schema({
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
	}
})

const hodModel = mongoose.model('hods', hodSchema)

module.exports = hodModel