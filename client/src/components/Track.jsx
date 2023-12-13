import React from 'react'

const Track = () => {
  return (
    <div className='h-screen'>
      <div className='flex justify-center items-center mt-[10%]'>
        <div>
          <h1 className='mb-[10px] font-system font-bold'>DAR ES SALAAM INSTITUTE OF TECHNOLOGY</h1>
          <p className='pl-[20%] font-mono font-bold'>TRACK CHALLENGES</p>
        </div>
      </div>
      <div className='flex justify-center ml-[30%] items-center relative h-[25%]'>
          <div className='relative flex-1 justify-center items-center '>
            <input type="text" name="" id="" placeholder='Enter your tracking key'
                className='md:w-[50%] w-[65%] relative italic h-[40px] px-[10px] py-[10px] mb-[10px] bg-green-200 hover:bg-green-100 rounded focus:outline-none'
            /><br />
            <button
              className='rounded bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]'
            >Track</button>
          </div>
      </div>
    </div>
  )
}

export default Track