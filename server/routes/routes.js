const express = require('express')
const router = express.Router()

const issuesModel = require('../models/issuesModel')
const authKeyModel = require('../models/authKeyModel')
const hodModel = require('../models/hodModel')
const staffModel = require('../models/staffModel')

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
		const registrationId = req.body.regId
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

router.post('/signup_hod', async(req, res)=>{
	try{
		const name = req.body.name
		const password = req.body.password
		const email = req.body.email
		const department = req.body.department
		const authKey = req.body.authKey

		const keyData = await authKeyModel.findOne({key: authKey})

		if(keyData){
			const newHod = new hodModel({
				name: name,
				email: email,
				department: department,
				password: password,
			})

			await newHod.save()

			res.status(200).json({message: 'signed'})
			
		}else{
			res.status(200).json({message: 'Wrong Authentication key'})
		}
	}catch(e){
		res.status(200).json({message: 'could not signup by sever'})
	}
})

router.post('/signup_staff', async(req, res)=>{
	try{
		const name = req.body.name
		const password = req.body.password
		const email = req.body.email
		const department = req.body.department
		const authKey = req.body.authKey

		const keyData = await authKeyModel.findOne({key: authKey})

		if(keyData){
			const newStaff = new staffModel({
				name: name,
				email: email,
				department: department,
				password: password,
			})

			await newStaff.save()

			res.status(200).json({message: 'signed'})
			
		}else{
			res.status(200).json({message: 'Wrong Authentication key'})
		}
	}catch(e){
		res.status(200).json({message: 'could not signup by sever'})
	}
})

router.post('/login_hod', async(req, res)=>{
	try{
		const email = req.body.email
		const password = req.body.password

		const userEmailData = await hodModel.findOne({email: email})

		if(userEmailData){
			
			const userData = await hodModel.findOne({email: email, password: password})

			if(userData){
				res.status(200).json({userData})
			}else{
				res.status(200).json({message: 'Wrong password'})
			}
			
		}else{
			res.status(200).json({message: 'Wrong email'})
		}
	}catch(e){
		res.status(200).json({message: 'Could not login by server'})
	}
})

router.post('/login_staff', async(req, res)=>{
	try{
		const email = req.body.email
		const password = req.body.password

		const userEmailData = await staffModel.findOne({email: email})

		if(userEmailData){
			
			const userData = await staffModel.findOne({email: email, password: password})

			if(userData){
				res.status(200).json({userData})
			}else{
				res.status(200).json({message: 'Wrong password'})
			}
			
		}else{
			res.status(200).json({message: 'Wrong email'})
		}
	}catch(e){
		res.status(200).json({message: 'Could not login by server'})
	}
})

module.exports = router