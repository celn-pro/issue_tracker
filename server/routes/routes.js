const express = require('express')
const router = express.Router()

const customerModel = require('../models/model')

router.get('/', (req, res) => {
	res.send('Welcome to the main route')
})

router.post('/track', async (req, res)=>{
	try{
		const name= req.body.name
		const age = req.body.age

		//adding a customer in customers or creating new instance of your model
		const newCustomer = new customerModel({
			name: name,
			age: age,
		});

		//save the document to the collection
		const savedCustomer = await newCustomer.save()

		res.status(200).json({message: 'Data recieved successfully ', savedCustomer});
	}catch(e){
		//
	}
})

module.exports = router