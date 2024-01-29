import React from 'react'

const Track = () => {
  return (
	  <div className='ml-[300px] h-[100vh]'>
      <div className='border-[1px] border-black top-[130px] right-[50px] left-[300px] bottom-[50px] absolute rounded px-[20px] flex justify-center items-center'>
		<div className='h-[400px] w-[400px] rounded-xl border-[1px] shadow-xl px-[20px] py-[20px]'>
		<div className='mt-[20px]'>
        <div className=''>
          {/* <h1 className=' font-system font-bold text-[28px] text-center'>DAR ES SALAAM INSTITUTE OF TECHNOLOGY</h1> */}
		  <div className=''>
				<p className=' font-system font-bold'>TRACK:</p>
		  </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
          <div className='w-full text-black'>
				  <div className=''>
					  <input type="text" name="" id="" placeholder='Enter your tracking key'
						  className='w-full italic px-[10px] py-[px] mb-[10px] rounded focus:outline-none bg-white border-2 border-black  font-medium'
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