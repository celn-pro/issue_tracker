const mongoose = require('mongoose')

//create a mongoose model (schema)
const customerSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	age: Number,
	
});

//create a mongoose collection based on the schema
const customerModel = mongoose.model('customers', customerSchema);

module.exports = customerModel
