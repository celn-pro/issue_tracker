import React, {useEffect, useState} from 'react'
import {Check} from 'lucide-react'

const Settings = (props) => {
	const [showSaved, setShowSaved] = useState(false)
	const [change, setChange] = useState(false)
	const [index, setIndex] = useState(null)
	const [data, setData] = useState([])
	const [userData, setUserData] = useState({})

	// const useData = props.useData

	useEffect(()=>{
		updateUser()

		setTimeout(()=>{
			setIndex(null)
		}, 2000)
	},[showSaved])

	const updateUser = async () => {

		const response = await fetch('http://localhost:3000/update_staff', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({ id: props.userData._id })
		})

		const responseData = await response.json()

		if (responseData.userData) {

			setData((prevData) => {
				const newData = [...prevData]
				newData[0] = responseData.userData.name
				newData[1] = responseData.userData.email
				newData[2] = responseData.userData.password
				newData[3] = responseData.userData._id

				return newData
			})
			setUserData(responseData.userData)
		}
	}

	const handleSubmit= async(e)=>{
		e.preventDefault()
		const response = await fetch('http://localhost:3000/settings', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({id: data[3], name: data[0], email: data[1], password: data[2], who: 'staff'})
		})

		const responseData = await response.json()

		if(responseData.changedDetails){
			updateUser()

			setChange(!change)
			setShowSaved(!showSaved)
			setIndex(0)
		}

	}

  return (
	  <div className='h-[100vh] ml-[300px] max-800:ml-0'>
		  <div className=' bottom-[50px] rounded top-[50px] right-[50px] max-800:left-[50px] left-[350px] absolute max-800:border-none border-[1px] px-[20px] py-[20px]'>
			<div className='border-[1px] px-[10px] py-[10px] font-bold'>
				<div className='text-[28px]'>Security & Settings</div>
				  <div>
					  <div>Name: {userData.name?.substring(0, 1).toLocaleUpperCase() + userData.name?.substring(1, userData.name?.length)}</div>
				  </div>
				  <div>
					  <div>Email: {userData.email}</div>
				  </div>
				  <div>
					  <div>Password: ******</div>
				  </div>
				<button className='px-[10px] py-[5px] bg-[#04314C] rounded text-white text-[12px]' onClick={()=>setChange(!change)}>Change</button>
			</div>

			<div className={`${change?'block':'hidden'} rounded h-[500px] absolute z-10 bg-white bottom-[50px] max-800:top-0 max-800:right-0 right-[100px] max-800:left-0 left-[150px] px-[10px] py-[10px]`}>
				<div className='rounded border-[1px] w-full h-full px-[20px] py-[20px]'>
					<div className='flex justify-end items-center'>
						<div className='bg-[#04314C] w-[20px] text-white rounded text-center cursor-pointer' onClick={()=>setChange(!change)}>x</div>
					</div>
					<div className='font-bold'>
						<form onSubmit={handleSubmit}>
						  <div>
							  <div>Name: {userData.name?.substring(0,1).toLocaleUpperCase()+userData.name?.substring(1,userData.name?.length)}</div>
							  <div>New name:
								  <input type="text" placeholder={userData.name?.substring(0,1).toLocaleUpperCase()+userData.name?.substring(1,userData.name?.length)} className='md:w-[400px] ml-[20px] max-800:ml-0 enabled outline-none px-[10px] py-[10px] border-[1px] rounded text-green-500 font-bold' onChange={(e)=>{
										setData((prevData) => {
											const newData = [...prevData]
											newData[0] = e.target.value

											return newData
										})
								  }} />
							  </div>
						  </div>
						  <div>
							  <div>Email: {userData.email}</div>
							  <div>New email:
								  <input type="email" placeholder={userData.email} className='md:w-[400px] ml-[20px] max-800:ml-0 enabled outline-none px-[10px] py-[10px] border-[1px] rounded text-green-500 font-bold' onChange={(e)=>{
										setData((prevData) => {
										const newData = [...prevData]
										newData[1] = e.target.value

										return newData
									})
								  }}/>
							  </div>
						  </div>
						  <div>
							  <div>Password: {userData.password}</div>
							  <div>New name:
								  <input type="text" placeholder={userData.password} className='md:w-[400px] ml-[20px] max-800:ml-0 enabled outline-none px-[10px] py-[10px] border-[1px] rounded text-green-500 font-bold' onChange={(e)=>{
										setData((prevData) => {
										const newData = [...prevData]
										newData[2] = e.target.value

										return newData
									})
								  }}/>
							  </div>
						  </div>
						<div>
							<button type='submit' className='bg-green-600 mt-[10px] w-[100px] px-[10px] py-[5px] rounded text-white'>Save</button>
						</div>
						</form>
						
					</div>
				</div>
			</div>
			<div className={`${index !=null?'block':'hidden'} flex justify-center`}>
				<div className=' text-white bg-black w-[300px] h-[70px] text-center text-[12px] pt-[10px] rounded'>
					  <div>Saved changes successfully! </div>
					  <div className='flex justify-center'> <Check /></div>
				</div>
			</div>
			<button className={`${change?'block':'hidden'} w-full h-full absolute z-9 bg-white bottom-[50px] rounded top-[0px] right-[0px]`} onClick={()=>setChange(!change)}></button>
		</div>
	  </div>
  )
}

export default Settings