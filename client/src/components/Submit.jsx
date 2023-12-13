import React from 'react'

const Submit = () => {
  const courses = ['COE', 'IT', 'ETE']
  const department = ['COMPUTER', 'CIVIL', 'GS']
  return (
    <div>
      <div className='flex justify-center items-center mt-[20px]'>
        <div>
          <div className='flex-1 justify-center items-center '>
            <h2 className='font-bold font-system mb-[10px]'>DAR ES SALAAM INSTITUTE OF TECHNOLOGY</h2>
            <p className='relative pl-[20%] font-bold font-mono'>SUBMIT CHALLENGES</p>
          </div>
          <div className=''>
            <input type="text" name="" id="" placeholder='Enter Your Name' 
                className='w-full italic h-[40px] px-[10px] py-[10px] mb-[10px] bg-sky-100 hover:bg-green-200 rounded focus:outline-none'
            /> <br />
            <input type="text" name="" id="" placeholder='Registration #' 
                className='w-full italic h-[40px] px-[10px] py-[10px] mb-[10px] bg-sky-100 hover:bg-green-200 rounded focus:outline-none'
            /> <br />
            <input type="text" name="" min="2017"  id="" placeholder='Your class i.e OD22COE' 
                className='w-full italic h-[40px] px-[10px] mb-[10px] py-[10px] bg-sky-100 hover:bg-green-200 rounded focus:outline-none'
            /> <br />
            <div className='flex justify-start items-center'>
              <span className='relative w-[50%] italic'>Course:</span>
              <select name="" id=""
                className='outline-none relative w-[50%] rounded bg-sky-100 px-[10px] italic py-[10px] hover:bg-green-200'
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
                className='outline-none relative w-[50%] rounded italic bg-sky-100 px-[10px] py-[10px] hover:bg-green-200'
              >
                  {department.map((department)=>(
                    <option value={department}>{department}</option>
                  ))}
              </select>
            </div><br />
            <input type="text" name="" id="" placeholder='Tittle of your problem' 
                className='w-full italic h-[40px] px-[10px] py-[10px] mb-[10px] bg-sky-100 hover:bg-green-200 rounded focus:outline-none'
            /> <br />
             <input type="text" name="" id="" placeholder='Problematic module if any(Optional)' 
                className='w-full italic h-[40px] px-[10px] py-[10px] mb-[10px] bg-sky-100 hover:bg-green-200 rounded focus:outline-none'
            /> <br />
            <textarea name="" id="" cols="30" rows="10" placeholder='Describe your problem here'
                className='w-full italic px-[10px] py-[10px] mb-[10px] bg-sky-100 hover:bg-green-200 rounded focus:outline-none'
            ></textarea> <br />
            <span className='italic'>Attach file if any(Optional):</span><br />
            <input type="file" name="" id="" 
              className='w-full italic h-[40px] px-[10px] py-[10px] mb-[10px] bg-sky-100 hover:bg-green-200 rounded focus:outline-none'
            />
            <div className='flex justify-end items-center py-6'>
              <button className='rounded bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Submit