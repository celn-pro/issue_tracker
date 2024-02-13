import React, { useEffect, useState } from 'react'
import {Camera} from 'lucide-react'

const Profile = (props) => {
	const [userData, setUserData] = useState({})

	// const userData = props.userData

	useEffect(()=>{
		updateUser()
	},[])

	const updateUser = async()=>{

		const response = await fetch('http://localhost:3000/update_staff', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Add other headers if required
			},
			body: JSON.stringify({id: props.userData._id})
		})

		const responseData = await response.json()

		if(responseData.userData){
			setUserData(responseData.userData)
		}
	}

	const handleClick = ()=>{
		document.getElementById('file').click()
	}

	const handleOnChange = async(e)=>{
		const input = document.getElementById('file')
		const preview = document.getElementById('imagePreview')
		const file = input.files[0]

		if(file){
			
			const formData = new FormData()
			formData.append('profileImage', file)
			formData.append('id', userData._id)

			const response = await fetch('http://localhost:3000/staff_profileImg', {
				method: 'POST',
				body: formData,
				
			})

			const responseData = await response.json()
			console.log(responseData.user)

			if (responseData.user) {
				setUserData(responseData.user)
			}
			

		}
	}

  return (
	  <div className='h-[100vh] ml-[300px] max-800:ml-0'>
		<div className=' absolute bottom-[50px] top-[50px] right-[50px] left-[350px] max-800:left-[50px] rounded flex justify-center items-center'>
			<div className='w-[340px] px-[20px] py-[20px] shadow-xl rounded-xl'>
				<div className='flex justify-center items-center h-[300px] rounded'>
					<div className='w-[220px] h-full flex justify-center items-center border-[1px] rounded'>
					<div className='h-[200px] w-[200px] bg-gray-200 rounded-[50%] overflow-hidden'>
						<img alt="profile" src={'http://localhost:3000/'+userData.profileImg?.replace(/\\/g, '/')} id='imagePreview' className='w-full h-full' />
						<input type="file" name="" id="file" className='hidden' onChange={handleOnChange}/>
						<div className='absolute bg-red-100 right-[490px] max-800:right-[40%] top-[360px] h-[30px] w-[30px] rounded-[50%] px-[7px] py-[5px] flex justify-center items-center cursor-pointer'
							 onClick={handleClick}
						>
							<Camera className='h-[15px]' />
						</div>
					</div>
				</div>
				</div>
				<div className='font-bold mt-[10px]'>
					<table className='w-[300px]'>
					<tr>
						<td>Department:</td>
						<td>{userData?.department}</td>
					</tr>
					<tr>
						<td>Name:</td>
						<td>{userData.name?.substring(0,1).toLocaleUpperCase()+userData.name?.substring(1,userData.name?.length)}</td>
					</tr>
					<tr>
						<td>Email:</td>
						<td>{userData?.email}</td>
					</tr>
				</table>
			</div>
			</div>
		</div>
	  </div>
  )
}

export default Profile