const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const router = express.Router()

const issuesModel = require('../models/issuesModel')
const descModel = require('../models/descModel')
const authKeyModel = require('../models/authKeyModel')
const hodModel = require('../models/hodModel')
const staffModel = require('../models/staffModel')
const faqsModel = require('../models/faqsModel')
const feedbackModel = require('../models/feedbackModel')

//create uploads if it dont exists yet
const uploadDir = path.join(__dirname, 'uploads')
if(!fs.existsSync(uploadDir)){
	fs.mkdirSync(uploadDir)
}

//multer setup for handline file upload
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/') //specify the directory where you want to store
	},
	filename: (req, file, cb) =>{
		cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`) //save file as jpeg
	}
})

const upload = multer({storage})

router.get('/', (req, res) => {
	res.send('Welcome to the main route')
})

router.post('/track', async(req, res)=>{
	try{

		const trackId = req.body.trackId

		//fetch the matching user
		const fetchedUser = await issuesModel.findOne({registrationId: trackId})

		if(fetchedUser){

			const userName = fetchedUser.name
			const userId = fetchedUser.registrationId
			const fetchedIssues = await issuesModel.find({registrationId: trackId}).populate({path:'description', select: '-_id description'}).lean().exec()
			const transformedData = fetchedIssues.map(s=>({
				name: s.name,
				registrationId: s.registrationId,
				class: s.class,
				course: s.course,
				department: s.department,
				title: s.title,
				contacts: s.contacts,
				description: s.description.description,
				status: s.status,
				deligated_to: s.deligated_to,
				date: s.date,
			}))

			res.status(200).json({transformedData, userName, userId});
			
		}else{
			res.status(200).json({message: 'Wrong Tracking Key!'});
		}

	}catch(e){
		res.status(200).json({message: 'Error while fetching data!', e});
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

		const newDesc = new descModel({
			registrationId: registrationId,
			description: description
		})

		const descData = await newDesc.save()

		//adding a issue in customers or creating new instance of your model
		const newIssue = new issuesModel({
		name: name,
		registrationId: registrationId,
		class: class_,
		course: course,
		department: department,
		title: title,
		contacts: contact,
		description: descData._id,
		file: file,
	})

	//save the document to the collection
	await newIssue.save()

	res.status(200).json({message: 'submitted'});

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

		const keyData = await authKeyModel.find({key: authKey})

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
			res.status(200).json({message: `Wrong Authentication key ${keyData}`})
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
			res.status(200).json({message: 'Invalid email'})
		}
	}catch(e){
		res.status(200).json({message: 'Could not login by server'})
	}
})

router.post('/keys', async(req, res)=>{
	try{
		const _id = req.body.generated_by
		const key = req.body.key

		if(key){
			const newKey = new authKeyModel({
			key: key,
			generated_by: _id,
		})

		await newKey.save()

		}

		const keys = await authKeyModel.find({generated_by: _id})

		if(keys){
			res.status(200).json({message:'We didi it ', keys})
		}else{
			res.status(200).json({message: 'No keys yet'})
	}
	}catch(e){
		console.log(e)
	}
})

router.post('/post_keys', async(req, res)=>{
	try{
		const _id = req.body.generated_by
		const key = req.body.key

		const newKey = new authKeyModel({
			key: key,
			generated_by: _id,
		})

		await newKey.save()

		const keys = await authKeyModel.find({generated_by: _id})

		if(keys){
			res.status(200).json({message:'We didi it ', keys})
		}else{
			res.status(200).json({message: 'No keys yet'})
	}
	}catch(e){
		console.log(e)
	}
})

router.post('/stats', async(req, res) => {
	try{
		const department = req.body.department

		const stats = await issuesModel.find({department: department})

		if(stats){
			res.status(200).json({stats})
		}else{
			res.status(200).json({message: 'No stats yet'})
		}
	}catch(e){
		console.log(e)
	}
})

router.post('/delete_key', async(req, res) => {
	try{
		const key = req.body.key

		const stats = await authKeyModel.deleteOne({key: key})

		if(stats){
			const keys = await authKeyModel.find()
			
			res.status(200).json({keys})
		}else{
			res.status(200).json({message: 'No stats yet'})
		}
	}catch(e){
		console.log(e)
	}
})

router.post('/issues', async(req, res)=>{
	try{

		const department = req.body.department
		const deligated_to = req.body.deligated_to

		const fetchedIssues = await issuesModel.find({department: department})
		.populate({path:'description', select: 'description'})
		.populate({path: 'deligated_to', select: 'name'}).lean().exec()

		if(deligated_to){
			const staffIssues = await issuesModel.find({deligated_to: deligated_to})
					.populate({path:'description', select: 'description'})
					.populate({path: 'deligated_to', select: 'name'}).lean().exec()
		
			const staffData = staffIssues.map(s=>({
				_id: s._id,
				name: s.name,
				registrationId: s.registrationId,
				class: s.class,
				course: s.course,
				department: s.department,
				title: s.title,
				contacts: s.contacts,
				description: s.description.description,
				status: s.status,
				deligated_to: s.deligated_to.name,
				date: s.date,
			}))
			
			res.status(200).json({staffData})
		}else{ 
			const staffs = await staffModel.find({})
			const transformedData = fetchedIssues.map(s=>({
				_id: s._id,
				name: s.name,
				registrationId: s.registrationId,
				class: s.class,
				course: s.course,
				department: s.department,
				title: s.title,
				contacts: s.contacts,
				description: s.description.description,
				status: s.status,
				deligated_to: s.deligated_to.name,
				date: s.date,
			}))

			res.status(200).json({transformedData, staffs});
		}
			
	}catch(e){
		res.status(200).json({message: 'Error while fetching data!', e});
	}
})

router.post('/delegate', async(req, res)=>{
	try{

		const department = req.body.department
		const _id = req.body._id
		const deligated_to = req.body.deligated_to

		await issuesModel.updateOne({_id: _id}, {$set:{deligated_to: deligated_to}})

		const fetchedIssues = await issuesModel.find({department: department}).populate({path:'description', select: '-_id description'}).lean().exec()
		const transformedData = fetchedIssues.map(s=>({
			_id: s._id,
			name: s.name,
			registrationId: s.registrationId,
			class: s.class,
			course: s.course,
			department: s.department,
			title: s.title,
			contacts: s.contacts,
			description: s.description.description,
			status: s.status,
			deligated_to: s.deligated_to,
			date: s.date,
		}))

		res.status(200).json({transformedData});
			
	}catch(e){
		res.status(200).json({message: 'Error while fetching data!', e});
	}
})

router.post('/profileImg', upload.single('profileImage'), async(req, res)=>{
	try{
		const profile = req.file.path
		const id = req.body.id

		await hodModel.updateOne({_id: id}, {$set: {profileImg: profile}})

		const user = await hodModel.findOne({_id: id})

		res.status(200).json({user})
	}catch(e){
		console.log(e)
	}
})

router.post('/staff_profileImg', upload.single('profileImage'), async(req, res)=>{
	try{
		const profile = req.file.path
		const id = req.body.id

		await staffModel.updateOne({_id: id}, {$set: {profileImg: profile}})

		const user = await staffModel.findOne({_id: id})

		res.status(200).json({user})
	}catch(e){
		console.log(e)
	}
})


router.post('/update_hod', async(req, res)=>{
	try{
		const id = req.body.id

		const userData = await hodModel.findOne({_id: id})

		res.status(200).json({userData})
		
	}catch(e){
		console.log(e)
	}
})

router.post('/update_staff', async(req, res)=>{
	try{
		const id = req.body.id

		const userData = await staffModel.findOne({_id: id})

		res.status(200).json({userData})
		
	}catch(e){
		console.log(e)
	}
})

router.post('/settings', async(req, res)=>{
	try{
		const id = req.body.id
		const name = req.body.name
		const email = req.body.email
		const password = req.body.password
		const who = req.body.who
		if(who==='staff'){
			const changedDetails = await staffModel.updateOne({_id:id}, {$set:{name: name, email: email, password: password}})
			res.status(200).json({changedDetails})
		}else if(who ==='hod'){
			const changedDetails = await hodModel.updateOne({_id:id}, {$set:{name: name, email: email, password: password}})
			res.status(200).json({changedDetails})
		}
		
	}catch(e){
		console.log(e)
	}
})

router.post('/submit_faqs', async(req, res)=>{
	try{
		const title = req.body.title
		const description = req.body.description

		const newFaqs = new faqsModel({
			title: title,
			description: description,
		})

		await newFaqs.save()

		res.status(200).json({message: 'done'})
	}catch(e){
		console.log(e)
	}
})

router.post('/fetch_faqs', async(req, res)=>{
	try{
		const faqs = await faqsModel.find({})

		res.status(200).json({faqs})
	}catch(e){
		console.log(e)
	}
})

router.post('/submit_feedback', async(req, res)=>{
	try{
		const feedback = req.body.feedback

		const newFeedback = new feedbackModel({
			feedback: feedback,
		})

		await newFeedback.save()

		res.status(200).json({message: 'done'})
	}catch(e){
		console.log(e)
	}
})

module.exports = router