const mongoose = require('mongoose')

const faqsSchema = mongoose.Schema({
	title: String,
	description: String,
})

const faqsModel = mongoose.model('faqs', faqsSchema)

module.exports = faqsModel