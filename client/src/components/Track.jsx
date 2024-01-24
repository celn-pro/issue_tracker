import React from 'react'

const Track = () => {
  return (
	  <div className='md:px-[200px] mx-[15px] px-[20px]'>
      <div className='flex justify-center items-center mt-[20px]'>
        <div>
          <h1 className=' font-system font-bold text-[28px] text-center'>DAR ES SALAAM INSTITUTE OF TECHNOLOGY</h1>
		  <div className='flex justify-center items-center'>
				<p className=' font-system font-bold'>TRACK CHALLENGES</p>
		  </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
          <div className='w-full'>
				  <div className=''>
					  <input type="text" name="" id="" placeholder='Enter your tracking key'
						  className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-[#04314C] border-2 border-[#04314C]  h-[50px] font-medium'
					  />
				  </div>
				  <button className=' text-white w-full md:w-[200px] font-medium rounded w-full h-[50px] font-medium px-[5px] py-[5px] bg-[#04314C]'>Track</button>

		  </div>
      </div>
    </div>
  )
}

export default Track