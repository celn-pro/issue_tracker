import React, { useState, useEffect } from 'react'

import { File, Check, Trash } from 'lucide-react'


const SystemAdmin = () => {

	const [show, setShow] = useState(false)
	const [showFeedback, setShowFeedback] = useState(false)
	const [showTry, setShowTry] = useState(false)
	const [data, setData] = useState([])
	const [feedbacks, setFeedbacks] = useState([])
	const [message, setMessage] = useState('')
	const [warning, setWarning] = useState()

	const [generatedKey, setGeneratedKey] = useState(null)
	const [showCopied, setShowCopied] = useState(false)
	const [copiedId, setCopiedId] = useState(null)
	const [authKeys, setAuthKeys] = useState([])

	useEffect(() => {
		fetchedKeys()
		fetchFeedback()

		if (showCopied) {
			setTimeout(() => {
				setShowCopied(!showCopied)
				setCopiedId(null)
			}, 3000)
		}

		if (warning) {
			setTimeout(() => {
				setWarning(null)
			}, 4000)
		}
	}, [showCopied, warning])

	const generateRandomKey = (length) => {
		let PHRASE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		var key = []

		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * PHRASE.length)
			key += PHRASE.charAt(randomIndex)
		}
		let key1 = key.substring(0, 4) + '-'
		let key2 = key.substring(4, 8) + '-' + key.slice(8, 12)
		key = 'dit-' + key1 + key2

		return key
	}

	const copyToClipBoard = (text) => {
		navigator.clipboard.writeText(text)
	}

	const fetchedKeys = async () => {
		const response = await fetch('https://odd22.onrender.com/keys', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({ generated_by: userData._id })
		})

		const responseData = await response.json()

		setAuthKeys(responseData.keys)

	}

	const postdKeys = async () => {
		const response = await fetch('https://odd22.onrender.com/post_keys', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({ generated_by: 'dit', key: generatedKey })
		})

		const responseData = await response.json()

		setAuthKeys(responseData.keys)
		setGeneratedKey('')
	}

	const handleClick = async()=>{
		if(data[0] && data[1]){

			const response = await fetch('https://odd22.onrender.com/submit_faqs', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					// Add other headers if required
				},
				body: JSON.stringify({ title: data[0], description: data[1] })

			})

			const responseData = await response.json()

			if (responseData.message == 'done') {
				setMessage('Successfully added!')
				setWarning(true)
				setShow(!show)
			} else {
				setMessage('cant submit please try again later.')
				setWarning(true)
				setShow(!show)
			}
		}else{
			setMessage('Important data required!')
			setWarning(true)

		}

	}

	const fetchFeedback = async() =>{
		const response = await fetch('https://odd22.onrender.com/get_feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},

		})

		const responseData = await response.json()
		if(responseData.feedbacks){
			console.log(responseData.feedbacks)
			setFeedbacks(responseData.feedbacks)
		}

	}

  return (
	<div className='px-[10px] h-[100vh] flex-1 justify-start'>
	<div className='flex justify-start items-center text-[28px] font-bold'>
		<h1>System Administrator</h1>
	</div>
	<div className={`${showFeedback?'hidden':'block'} flex justify-start items-center mb-[10px]`}>
		<div className='border-2 px-[20px] py-[5px] w-[300px]'>
			<div>
				<h2>you can always add Faqs here.</h2>
			</div>
			<div>
				<button className='rounded bg-black text-white w-[90px] mb-[10px]' onClick={()=>{setShow(!show)}}>{show?'Close':'Add'}</button>
				<div className={` ${show? 'block':'hidden'}`}>
					<div className='mb-[20px]'>
						<input type="text" name="" placeholder='Title' id="" className='w-full px-[20px] py-[10px] focus:outline-none rounded border-[1px]' onChange={(e)=>{
							setData((prevData) => {
								const newData = [...prevData]
								newData[0] = e.target.value

								return newData
							})
						}}/>
					</div>
					<div>
						<textarea name="" id="" placeholder='explanation' cols="30" rows="10" className='w-full px-[20px] py-[10px] focus:outline-none rounded border-[1px]' onChange={(e)=>{
							setData((prevData) => {
								const newData = [...prevData]
								newData[1] = e.target.value

								return newData
							})
						}}></textarea>
					</div>
					<button className='rounded bg-green-600 w-[90px] text-white' onClick={handleClick}>Send</button>
				</div>
			</div>
			<div className={`${warning? 'block': 'hidden'}`}>{message}</div>
		</div>
	</div>
	<div className={`${show?'hidden':'block'} flex justify-start items-center mb-[10px]`}>
		<div className='border-2 px-[20px] py-[5px] w-[300px]'>
			<div>
				<h2>You can see the feedback from users here</h2>
			</div>
			<div>
				<button className='bg-black text-white w-[90px] rounded mb-[10px]' onClick={()=>setShowFeedback(!showFeedback)}>{showFeedback?'Close':'Show'}</button>
				{feedbacks.map(s=>{
					
					return <div className={`${showFeedback ? 'block' : 'hidden'} border-2 px-[10px] py-[10px] mb-[10px]`}>
						<div>
							<div className='flex justify-between items-center'>
								<div className='h-[20px] w-[20px] bg-red-200 rounded-[50%]'></div>
								<div>{s.date.substr(0,10)}</div>
							</div>
							<div className=' max-800:w-auto h-[150px] mt-[10px] overflow-auto '>{s.feedback}</div>
						</div>
					</div>
				})}
			</div>
		</div>
	</div>
	<div className='flex justify-start items-center'>
		<div className='border-2 px-[20px] py-[5px] w-[300px]'>
			<div>
				<div>
					Generate keys to let anyone sneak into the system
				</div>
			</div>
			<div>
				<button className='bg-black text-white w-[90px] rounded mb-[10px]' onClick={()=> setShowTry(!showTry)}>{showTry?'Close':'Try'}</button>
				<div className={`${showTry?'block': 'hidden'}`}>
					<div>
						<button className='bg-black text-white w-[90px] rounded mb-[10px]' onClick={()=>setGeneratedKey(generateRandomKey(12))}>Generate</button>
							  {generatedKey ? <button className='inline-block w-[50px] ml-[20px] rounded text-white font-bold bg-black cursor-pointer'
								  onClick={postdKeys}
							  >Use</button>:null}
					</div>
					<div>
						<input type="text" name="" placeholder='ie. dit-6ytT-HUyt-UtUU' disabled id="" value={generatedKey} className='w-full px-[20px] py-[10px] focus:outline-none rounded border-[1px]'/>
					</div>
					<div>
						<div className='mt-[20px]'>
							Genetated keys
						</div>
						<div className='h-[300px] overflow-auto px-[5px] py-[5px]'>
						{authKeys.map((s,i)=>{
							return <div>
								<span className='inline-block'>{generatedKey}</span>
								<span className='inline-block h-[20px] w-[20px] rounded-[50%] bg-gray-200 py-2'
									onClick={() => {
										setCopiedId(i)
										copyToClipBoard(t.key)
										setShowCopied(!showCopied)
									}}
								><File className='h-[10px]' /></span>
								<span className='inline-block h-[20px] w-[20px] rounded-[50%] bg-gray-200 py-2'
									onClick={async () => {
										const response = await fetch('https://odd22.onrender.com/delete_key', {
											method: 'POST',
											headers: {
												'Content-Type': 'application/json',
												// Add other headers if required
											},
											body: JSON.stringify({ key: t.key })
										})

										const responseData = await response.json()

										setAuthKeys(responseData.keys)
									}}
								><Trash className='h-[10px]' /></span>
							</div>
						})}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
  )
}

export default SystemAdmin