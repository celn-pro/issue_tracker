import React from 'react'

const LoginStaff = () => {
	const department = ['COMPUTER', 'CIVIL', 'GS']
	return (
		<div className='px-[20px]'>
			<div className='flex justify-center mt-[20px] items-center'>
				<h2 className='font-bold font-verydan mb-[10px] mt-[50px]'>LOGIN (HOD)</h2>
			</div>
			<div className='flex justify-center items-center'>
				<div className='max-[600px]:w-full w-[500px]'>

					<p className='px-[10px] italic text-red-500'>*password or email is incorrect</p>
					<input type="text" name="" id="" placeholder='Password'
						className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-[#04314C] border-2 border-[#04314C]  h-[50px] font-medium'
					/>
					<br />
					<input type="text" name="" min="2017" id="" placeholder='Email'
						className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-[#04314C] border-2 border-[#04314C]  h-[50px] font-medium'
					/> <br />

					<div className='flex justify-end items-center'>
						<button className=' text-white w-full font-medium rounded w-full h-[50px] font-medium px-[5px] py-[5px] bg-[#04314C]'>Login</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginStaff