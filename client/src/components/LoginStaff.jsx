import React from 'react'

const LoginStaff = () => {
  const department = ['COMPUTER', 'CIVIL', 'GS']
  return (
    <div>
      <div className='flex justify-center mt-[5%] items-center'>
        <h2 className='font-bold font-verydan mb-[10px] mt-[50px]'>LOGIN (HOD)</h2>
      </div>
      <div className='flex justify-center items-center'>
      <div className='md:w-[20%] w-[50%]'>
        
        <p className='px-[10px] italic text-red-500'>password do not match!</p>
        <input type="text" name="" id="" placeholder='Password' 
            className='w-full italic h-[40px] px-[10px] py-[10px] mb-[5px] bg-sky-100 hover:bg-green-200 rounded focus:outline-none'
        />
         <br />
         <p className='px-[10px] italic text-red-500'>Incorrect email address!</p>
        <input type="text" name="" min="2017"  id="" placeholder='Email' 
            className='w-full italic h-[40px] px-[10px] mb-[15px] py-[10px] bg-sky-100 hover:bg-green-200 rounded focus:outline-none'
        /> <br />
        
        <div className='flex justify-end items-center'>
              <button className='rounded bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]'>Send</button>
            </div>
      </div>
      </div>
    </div>
  )
}

export default LoginStaff