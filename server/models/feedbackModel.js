const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema({
	feedback: String,
	date:{
		type:Date,
		default: ()=> new Date().toLocaleString('en-US',{timeZone: 'GMT'})
	},
})

const feedbackModel = mongoose.model('feedbacks', feedbackSchema)

module.exports = feedbackModel