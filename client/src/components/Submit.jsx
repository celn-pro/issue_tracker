import React, { useState } from 'react'
import { File, Image } from 'lucide-react'

import { inputText } from '../constants'

const Submit = () => {
  const [selectedFileName, setSelectedFileName] = useState('')	

  const courses = ['COE', 'IT', 'ETE']
  const department = ['COMPUTER', 'CIVIL', 'GS']

  const handleFileChange =(e)=>{
	const fileInput = e.target

	if(fileInput.files.length>0){
		const selectedFile = fileInput.files[0]

		setSelectedFileName(selectedFile.name)
	}
  }

  const handleImageClick = ()=>{
	document.getElementById('file').click()
  }

  return (
	  <div className=' ml-[300px] h-[100vh]'>
	  <div className='border-[1px] border-black top-[130px] right-[50px] left-[300px] bottom-[50px] absolute rounded px-[20px] flex justify-center items-center'>
		<div className='px-[40px] py-[20px] flex justify-center items-center'>
		<div className='px-[20px] rounded border-[1px] shadow-xl'>
		<div className='flex justify-center items-center '>
			<div className='mt-[20px]'>
				{/* <h2 className='font-bold font-system mb-[10px] text-[28px] text-center'>DAR ES SALAAM INSTITUTE OF TECHNOLOGY</h2> */}
				<div className='flex justify-center items-center'>
					  <p className='relative font-bold font-system'>SUBMIT</p>
				</div>
			</div>
		</div>
      <div className='md:flex md:justify-center md:items-center md:gap-10 mt-[20px]'>
        <div>
          <div className=' text-black'>
           {inputText.map((s,i)=>{
			return (i == 0||i==1||i==2)?(<>
				<input type="text" name="" id="" placeholder={s.placeholder}
					className='w-full italic px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black'
				/> <br />
			</>):null
		   })} 
            <div className='flex justify-start items-center'>
              <span className='relative w-[50%] italic'>Course:</span>
              <select name="" id=""
							  className='outline-none relative w-[50%] rounded bg-white border-2 border-[#04314C] px-[10px] italic py-[5px]'
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
							  className='outline-none relative w-[50%] rounded italic bg-white border-2 border-black px-[5px] py-[5px]'
              >
                  {department.map((department)=>(
                    <option value={department}>{department}</option>
                  ))}
              </select>
            </div><br /> 
			<span className='italic'>Title:</span>
			 {inputText.map((s,i)=>{
			return (i == 3||i==4)?(<>
				<input type="text" name="" id="" placeholder={s.placeholder}
					className='w-full italic px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black'
				/> <br />
			</>):null
		   })} 
          </div>
		  <div>
		  </div>
        </div>
		<div className=' mb-[20px]'>
			<textarea name="" id="" cols="30" rows="9" placeholder='Describe your problem here'
				className='w-full italic px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black font-medium'
			></textarea> <br />
			<span className='italic'>Attach file if any(Optional):</span><br />
			<div>
				<div className='inline-block'>
					<div onClick={handleImageClick} className='inline-block bg-black text-white mb-[15px] w-[30px] mr-[10px] rounded px-[5px] py-[5px] cursor-pointer flex'>
					<Image className='inline-block h-[15px]'/>
					</div>
				</div>
				<span>{selectedFileName?selectedFileName:'no file'}</span>
			</div>
			<input type="file" name="" id="file"
				onChange={handleFileChange}
				className='w-full italic hidden px-[10px] mb-[10px] rounded focus:outline-none bg-white text-text font-bold'
			/>
			<div className='flex justify-end items-center'>
				<button className=' text-white w-full font-medium rounded w-full font-medium px-[5px] py-[5px] bg-black'>Send</button>
			</div>
		</div>
      </div>
	  </div>
	  </div>
	  </div>
    </div>
  )
}

export default Submit