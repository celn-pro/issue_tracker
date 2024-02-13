import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { useNavigate } from 'react-router-dom'

import { inputSignup } from '../constants'

//set user data
export const staffDataAtom = atomWithStorage('staffData', {})

export const LoginStaff = () => {
	const setStaffData = useAtom(staffDataAtom)[1]
	const [loged, setLoged] = useState(false)
	const [warning, setWarning] = useState()
	const [greenMsg, setGreenMsg] = useState(true)
	const [data, setData] = useState([])
	const [message, setMessage] = useState('Invalid field')

	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			setWarning(null)
			setGreenMsg(null)
		}, 4000)
	}, [warning])

	const handleLogin = async (e) => {
		e.preventDefault()
		if (data[1] && data[3]) {
			const response = await fetch('http://localhost:3000/login_staff', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ password: data[1], email: data[3] })
			})

			const responseData = await response.json()

			if (responseData.message) {
				setMessage(responseData.message)
				setWarning(true)
				return
			} else if (responseData.userData) {
				setLoged(!loged)
				setStaffData(responseData.userData)
				navigate('/staff_dashboard')
				return
			} else {
				throw new Error('There is a problem logging in!')
			}


		} else {
			setWarning(true)
		}
	}

	return (
		<div className=' h-[100vh]'>
			<div className='absolute top-[130px] right-[50px] left-[300px] max-800:left-[50px] bottom-[50px] md:border-[1px] border-black rounded flex justify-center items-center'>
				<div className='px-[20px] py-[20px] w-[400px] h-[250px] rounded border-[1px] shadow-xl text-[12px]'>
					<div className='flex justify-center items-center'>
						<h2 className='font-bold font-verydan mb-[10px]'>LOGIN</h2>
					</div>
					<div className={`${greenMsg ? 'text-green-600' : 'text-white'} font-bold py-[5px] mb-[10px]`}>Login to continue!</div>

					<div className='flex justify-center items-center'>
						<div className='max-[600px]:w-full w-[500px]'>
							<form onSubmit={handleLogin}>
								{inputSignup.map((s, i) => {
									return (s.placeholder == 'Password' || s.placeholder == 'Email') ? <>
										<input type={s.placeholder == 'Email' ? 'email' : 'text'} placeholder={s.placeholder}
											onChange={(e) => {
												setData((prevData) => {
													const newData = [...prevData]
													newData[s.index] = e.target.value

													return newData
												})
											}}
											className='w-full px-[10px] py-[5px] mb-[10px] md:rounded focus:outline-none bg-white text-black max-800:border-b-2 md:border-2 border-gray'
										/> <br />
									</> : null
								})}

								<div className={`${warning ? 'text-red-600' : 'text-white'} font-bold px-[10px] py-[5px] mb-[10px]`}>⚠{message}</div>
								<div className='flex justify-end items-center'>
									<button type='submit' className=' text-white w-full font-medium rounded w-full font-medium px-[5px] py-[5px] bg-black'
									>Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginStaff