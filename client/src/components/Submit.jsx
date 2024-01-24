import React from 'react'

const Submit = () => {
  const courses = ['COE', 'IT', 'ETE']
  const department = ['COMPUTER', 'CIVIL', 'GS']
  return (
	  <div className=' px-[20px]'>
		<div className='flex justify-center items-center '>
			<div className=''>
				<h2 className='font-bold font-system mb-[10px] text-[28px] text-center'>DAR ES SALAAM INSTITUTE OF TECHNOLOGY</h2>
				<div className='flex justify-center items-center'>
					  <p className='relative font-bold font-system'>SUBMIT CHALLENGES</p>
				</div>
			</div>
		</div>
      <div className='md:flex md:justify-center md:items-center md:gap-10 mt-[20px]'>
        <div>
          <div className='md:w-[500px]'>
            <input type="text" name="" id="" placeholder='Enter Your Name' 
				className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-[#04314C] border-2 border-[#04314C]  h-[50px] font-medium'
            /> <br />
            <input type="text" name="" id="" placeholder='Registration #' 
				className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-[#04314C] border-2 border-[#04314C]  h-[50px] font-medium'

            /> <br />
            <input type="text" name="" min="2017"  id="" placeholder='Your class i.e OD22COE' 
				className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-[#04314C] border-2 border-[#04314C]  h-[50px] font-medium'

            /> <br />
            <div className='flex justify-start items-center'>
              <span className='relative w-[50%] italic'>Course:</span>
              <select name="" id=""
							  className='outline-none relative w-[50%] rounded bg-white text-[#04314C] border-2 border-[#04314C] px-[10px] italic py-[10px]'
              >
                  {courses.map((course)=>(
                    <option value={course}>{course}</option>
                  ))}
              </select>
            </div>
             <br />
            <div className='flex justify-start items-center'>
              <span className='w-[50%] relative italic'>Department:</span>
              <select name="" id=""
							  className='outline-none relative w-[50%] rounded italic bg-white text-[#04314C] border-2 border-[#04314C] px-[10px] py-[10px]'
              >
                  {department.map((department)=>(
                    <option value={department}>{department}</option>
                  ))}
              </select>
            </div><br /> 
			<span className='italic'>Title:</span>
            <input type="text" name="" id="" placeholder='Tittle of your problem' 
				className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-[#04314C] border-2 border-[#04314C]  h-[50px] font-medium'
            /> <br />
             <input type="text" name="" id="" placeholder='Problematic module if any(Optional)' 
				className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-[#04314C] border-2 border-[#04314C]  h-[50px] font-medium'
            /> <br />
          </div>
		  <div>
		  </div>
        </div>
		<div className='md:w-[500px] mb-[20px]'>
			<textarea name="" id="" cols="30" rows="11" placeholder='Describe your problem here'
				className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-[#04314C] border-2 border-[#04314C] font-medium'
			></textarea> <br />
			<span className='italic'>Attach file if any(Optional):</span><br />
			<input type="file" name="" id=""
				className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-[#04314C] border-2 border-[#04314C]  h-[50px] font-medium'
			/>
			<div className='flex justify-end items-center'>
				<button className=' text-white w-full font-medium rounded w-full h-[50px] font-medium px-[5px] py-[5px] bg-[#04314C]'>Send</button>
			</div>
		</div>
      </div>
    </div>
  )
}

export default Submit