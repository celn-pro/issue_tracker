import React from 'react'
import {Camera} from 'lucide-react'

const Profile = () => {
	//event handlers
	const handleClick = ()=>{
		document.getElementById('file').click()
	}

	const handleOnChange = (e)=>{
		//
	}
  return (
	  <div className='h-[100vh] ml-[300px]'>
		<div className=' absolute bottom-[50px] top-[50px] right-[50px] left-[350px] rounded flex justify-center items-center'>
			<div className='w-[340px] px-[20px] py-[20px] shadow-xl'>
				<div className='flex justify-center items-center h-[300px] rounded'>
					<div className='w-[220px] h-full flex justify-center items-center border-[1px]'>
					<div className='h-[200px] w-[200px] bg-gray-200 rounded-[50%]'>
						<img src="" alt="profile" className='w-full h-full' />
						<input type="file" name="" id="file" className='hidden' />
						<div className='absolute bg-red-100 right-[490px] top-[360px] h-[30px] w-[30px] rounded-[50%] px-[7px] py-[5px] flex justify-center items-center cursor-pointer'
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
						<td>Name:</td>
						<td>Maganga SN</td>
					</tr>
					<tr>
						<td>Email:</td>
						<td>Ayouberasto7@gmail.com</td>
					</tr>
					<tr>
						<td>Department:</td>
						<td>Civil</td>
					</tr>
				</table>
			</div>
			</div>
		</div>
	  </div>
  )
}

export default Profile