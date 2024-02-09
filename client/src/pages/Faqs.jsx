import React, { useState, useEffect } from 'react'

const Faqs = () => {

	const [show, setShow] = useState(false)
	const [data, setData] = useState([])
	const [message, setMessage] = useState('')
	const [warning, setWarning] = useState()

	useEffect(() => {
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

  return (
	<div className='flex justify-center items-center h-[700px]'>
		<div>
			<div>
			<h2>Are you system admin? you can always add Faqs here.</h2>
			</div>
		<div>
			<button className='rounded bg-black text-white w-[90px] mb-[10px]' onClick={()=>{setShow(!show)}}>Add</button>
			<div className={` ${show? 'block':'hidden'} w-[600px]`}>
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
  )
}

export default Faqs