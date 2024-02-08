import React from 'react'

const Logout = (props) => {
	const userData = props.userData
	
  return (
	  <div className='h-[100vh] ml-[300px]'>
		  <div className=' bottom-[50px] rounded top-[50px] right-[50px] left-[350px] absolute border-[1px] py-[20px] px-[20px]'>
			<div className='flex justify-center items-center w-full h-full'>
				<div className='border-[1px] w-[200px] px-[20px] py-[20px]'>
					<div>⚠ Loging out</div>
					<div className='flex gap-3 font-bold text-white'>
						<button className='bg-green-600 rounded px-[10px] py-[5px]'>Cancel</button>
						<button className='bg-red-600 rounded px-[10px] py-[5px]'>Confirm</button>
					</div>
				</div>
			</div>
		  </div>
	  </div>
  )
}

export default Logout