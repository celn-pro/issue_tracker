import React from 'react'

const Track = () => {
  return (
	  <div className='ml-[300px] h-[100vh]'>
      <div className='border-[1px] border-black top-[130px] right-[50px] left-[300px] bottom-[50px] absolute rounded px-[20px] flex justify-center items-center'>
		<div className='h-[400px] w-[400px] rounded-xl border-[1px] shadow-xl px-[20px] py-[20px]'>
			<div className='mt-[20px]'>
				<div>
				<div className='mb-[10px]'>
						<p className='font-bold text-[12px]'>TRACK:</p>
				</div>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<div className='w-full text-black text-[12px]'>
					<div>
						<input type="text" placeholder='Enter your tracking key'
							className='w-full  px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white border-2 border-black  font-medium'
						/>
					</div>
					<button className=' text-white w-[100px] font-semibold rounded  font-medium px-[5px] py-[5px] bg-black'>Track</button>
				</div>
      		</div>
	  </div>
	  </div>
    </div>
  )
}

export default Track