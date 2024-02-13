import React, { useState, useEffect } from 'react'

const SystemAdmin = () => {

	const [show, setShow] = useState(false)
	const [showFeedback, setShowFeedback] = useState(false)
	const [data, setData] = useState([])
	const [feedbacks, setFeedbacks] = useState([])
	const [message, setMessage] = useState('')
	const [warning, setWarning] = useState()

	useEffect(() => {
		fetchFeedback()
		if (warning) {
			setTimeout(() => {
				setWarning(null)
			}, 4000)
		}
	}, [warning])

	const handleClick = async()=>{
		if(data[0] && data[1]){

			const response = await fetch('http://localhost:3000/submit_faqs', {
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
		const response = await fetch('http://localhost:3000/get_feedback', {
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
	<div className={`${show?'hidden':'block'} flex justify-start items-center`}>
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
	</div>
  )
}

export default SystemAdmin