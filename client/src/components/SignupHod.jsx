import React, { useEffect, useState } from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav'
import { usePrevSelectedNav } from '../hooks/usePrevSelectedNav'

import { inputSignup, department } from '../constants'

const SignupHod = () => {
	const [selectedNav, toggleSelectedNav] = useSelectedNav()
	const togglePrevSelectedNav = usePrevSelectedNav()[1]

	const [data, setData] = useState([])
	const [warning, setWarning] = useState()
	const [message, setMessage] = useState('Signup to continue!')
	const [signed, setSigned] = useState(false)

	const departments = [...department]

	useEffect(() => {
		if (warning) {
			setTimeout(() => {
				setWarning(null)
				if (signed) {
					togglePrevSelectedNav(selectedNav)
					toggleSelectedNav('LoginHod')
				}
			}, 4000)
		}
	}, [warning])

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			// console.log(data)
			if (data[1] === data[2]) {
				if (data[0] && data[1] && data[3] && data[4] && data[5]) {
					const response = await fetch('http://localhost:3000/signup_hod', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ name: data[0], password: data[1], email: data[3], authKey: data[4], department: data[5] })
					})

					if (!response.ok) {
						throw new Error('Request failed');
					}

					const responseData = await response.json()
					console.log(responseData.message)

					if (responseData.message === 'signed') {
						setSigned(true)
						setMessage('You successfull signedup, we redirecting you to login!')
						setWarning(true)
					} else {
						setMessage(responseData.message)
						setWarning(true)
					}
				} else {
					setMessage('⚠ Some field has invalid data')
					setWarning(true)
				}
			} else {
				setMessage('⚠ Password do not match')
				setWarning(true)
			}
		} catch (e) {
			//
		}
	}

	return (
		<div className='ml-[300px] h-[100vh]'>
			<div className='absolute top-[130px] right-[50px] left-[300px] bottom-[50px] border-[1px] border-black rounded flex justify-center items-center'>
				<div className='px-[20px] py-[20px] w-[400px] h-[380px] rounded border-[1px] shadow-xl text-[12px]'>
					<div className='flex justify-center items-center'>
						<h2 className='font-bold font-verydan mb-[10px]'>SIGNUP</h2>
					</div>
					<div className={`${warning ? 'text-red-600' : 'text-white'} ${signed ? 'text-green-600' : ''} font-bold px-[] py-[5px]`}>{message}</div>

					<div className='flex justify-center items-center'>
						<div className='max-[600px]:w-full w-[500px]'>
							<form action="" onSubmit={handleSubmit}>
								{inputSignup.map((s, i) => {
									return (i != 4) ? <>
										<input type={s.placeholder == 'Email' ? 'email' : 'text'} placeholder={s.placeholder}
											onChange={(e) => {
												setData((prevData) => {
													const newData = [...prevData]
													newData[s.index] = e.target.value

													return newData
												})
											}}
											className='w-full px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black'
										/> <br />
									</> : null
								})}

								<div className='flex justify-start items-center'>
									<span className='w-[50%] relative'>Department:</span>
									<select
										onChange={(e) => {
											setData((prevData) => {
												const newData = [...prevData]
												newData[5] = e.target.value

												return newData
											})
										}}
										className='outline-none relative w-[50%] rounded  bg-white border-2 border-black px-[5px] py-[5px]'

									>
										<option value="">select</option>
										{departments.map((d) => (
											<option value={d}>{d}</option>
										))}
									</select>
								</div> <br />
								{inputSignup.map((s, i) => {
									return (i == 4) ? <>
										<input type="text" placeholder={s.placeholder}
											onChange={(e) => {
												setData((prevData) => {
													const newData = [...prevData]
													newData[s.index] = e.target.value

													return newData
												})
											}}
											className='w-full px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black'
										/> <br />
									</> : null
								})}
								<div className='flex justify-end items-center'>
									<button type='submit' className=' text-white w-full font-medium rounded w-full font-medium px-[5px] py-[5px] bg-black'
									// onClick={hadleSubmit}
									>Sign up</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignupHod