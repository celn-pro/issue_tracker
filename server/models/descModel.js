const mongoose = require('mongoose')

const descSchema = new mongoose.Schema({
	registrationId: String,
	description: String
})

const descModel = mongoose.model('descriptions', descSchema)

module.exports = descModel