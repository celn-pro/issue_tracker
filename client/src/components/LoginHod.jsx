import React, { useEffect, useState } from 'react'
import { inputSignup } from '../constants'

import AdminDashboard from '../admin_components/HodAccount'

export const LoginHod = () => {
	const [loged, setLoged] = useState(false)
	const [warning, setWarning] = useState()
	const [greenMsg, setGreenMsg] = useState(true)
	const [data, setData] = useState([])
	const [message, setMessage] = useState('Invalid field')
	const [userData, setUserData] = useState({})

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
			} else if (responseData.userData) {
				setUserData(responseData.userData)
				setLoged(true)
			} else {
				throw new Error('There is a problem logging in!')
			}


		} else {
			setWarning(true)
		}
	}

	return loged ? <AdminDashboard userData={userData} /> : (
		<div className='ml-[300px] h-[100vh]'>
			<div className='absolute top-[130px] right-[50px] left-[300px] bottom-[50px] border-[1px] border-black rounded flex justify-center items-center'>
				<div className='px-[20px] py-[20px] w-[400px] h-[250px] rounded border-[1px] shadow-xl text-[12px]'>
					<div className='flex justify-center items-center'>
						<h2 className='font-bold font-verydan mb-[10px]'>LOGIN</h2>
					</div>
					<div className={`${greenMsg ? 'text-green-600' : 'text-white'} font-bold py-[5px] mb-[10px]`}>Login to continue!</div>

					<div className='flex justify-center items-center'>
						<div className='max-[600px]:w-full w-[500px]'>
							<form action="" onSubmit={handleLogin}>
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
											className='w-full px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black'
										/> <br />
									</> : null
								})}

								<div className={`${warning ? 'text-red-600' : 'text-white'} font-bold px-[10px] py-[5px] mb-[10px]`}>⚠{message}</div>
								<div className='flex justify-end items-center'>
									<button type='submit' className=' text-white w-full font-medium rounded w-full font-medium px-[5px] py-[5px] bg-black'
									// onClick={handleLogin}
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

export default LoginHod