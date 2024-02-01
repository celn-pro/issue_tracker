const express = require('express')
const router = express.Router()

const issuesModel = require('../models/issuesModel')

router.get('/', (req, res) => {
	res.send('Welcome to the main route')
})

router.post('/track', async (req, res)=>{
	try{

		const trackId = req.body.trackId

		//fetch the matching user
		const fetchedUser = await customerModel.find({registrationId: trackId})

		res.status(200).json({fetchedUser});
	}catch(e){
		res.status(200).json({message: 'Error while fetching data!'});
	}
})

router.post('/submit', async (req, res)=>{
	try{
		const name = req.body.name
		const registrationId = req.body.registrationId
		const class_ = req.body.class
		const course = req.body.course
		const department = req.body.department
		const title = req.body.title
		const contact = req.body.contact
		const description = req.body.description
		const file = req.body.file

		//adding a issue in customers or creating new instance of your model
		const newIssue = new issuesModel({
		name: name,
		registrationId: registrationId,
		class: class_,
		course: course,
		department: department,
		title: title,
		contact: contact,
		description: description,
		file: file,
	})

	//save the document to the collection
	await newIssue.save()

	res.status(200).json({message: 'Submitted successfully!'});

	}catch(e){
	res.status(200).json({message: 'There was a problem while submmiting, please try again later.'});
	}
})

module.exports = router