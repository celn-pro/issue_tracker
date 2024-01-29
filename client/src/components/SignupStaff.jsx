import React from 'react'
import { inputSignup } from '../constants'

const SignupStaff = () => {
	const department = ['COMPUTER', 'CIVIL', 'GS']
	return (
		 <div className='ml-[300px] h-[100vh]'>
		<div className='absolute top-[130px] right-[50px] left-[300px] bottom-[50px] border-[1px] border-black rounded flex justify-center items-center'>
		<div className='px-[20px] py-[20px] w-[400px] h-[350px] rounded border-[1px] shadow-xl text-[12px]'>
      <div className='flex justify-center items-center'>
        <h2 className='font-bold font-verydan mb-[10px]'>SIGNUP</h2>
      </div>
      <div className='flex justify-center items-center'>
      <div className='max-[600px]:w-full w-[500px]'>
        {inputSignup.map((s,i)=>{
			return (i!=4)?<>
				<input type="text" name="" id="" placeholder={s.placeholder}
					className='w-full px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black'
				/> <br />
			</>:null
		})}
    
        <div className='flex justify-start items-center'>
          <span className='w-[50%] relative'>Department:</span>
          <select name="" id=""
			className='outline-none relative w-[50%] rounded  bg-white border-2 border-black px-[5px] py-[5px]'

          >
              {department.map((department)=>(
                <option value={department}>{department}</option>
              ))}
          </select>
        </div> <br />
			{inputSignup.map((s, i) => {
				return (i == 4) ? <>
					<input type="text" name="" id="" placeholder={s.placeholder}
						className='w-full px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black'
					/> <br />
				</> : null
			})}
        <div className='flex justify-end items-center'>
			<button className=' text-white w-full font-medium rounded w-full font-medium px-[5px] py-[5px] bg-black'>Sign up</button>
        </div>
      </div>
      </div>
	  </div>
	  </div>
    </div>
	)
}

export default SignupStaff