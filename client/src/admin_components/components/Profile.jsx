import React from 'react'

const Profile = () => {
  return (
	  <div className='h-[100vh] ml-[300px]'>
		<div className=' absolute bottom-[50px] top-[50px] right-[50px] left-[350px] rounded'>
			<div className='flex justify-center items-center h-[300px] rounded border-[1px]'>
				<div className='h-[200px] w-[200px] bg-gray-200 rounded-[50%]'>
					 <img src="" alt="profile" className='w-full h-full' />
				</div>
			</div>
			<div className='font-bold'>
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
  )
}

export default Profile