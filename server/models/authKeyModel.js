const mongoose = require('mongoose')

const authKeyChema = new mongoose.Schema({
	key: {
		type: String,
		required: true,
	},
	generated_by: {
		type: String,
		required: true,
	},
})

const authKeyModel = mongoose.model('authKeys', authKeyChema)

module.exports = authKeyModel