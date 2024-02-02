import React, {useEffect, useState} from 'react'
import {Image} from 'lucide-react'

import {inputText, department, course} from '../constants'

const Submit = () => {

  const [selectedFileName, setSelectedFileName] = useState('')
  const [warning, setWarning] = useState()
  const [data, setData] = useState([])
  	

  const courses = [...course]
  const departments = [...department]

  useEffect(()=>{
	setTimeout(()=>{
		setWarning(null)
	},4000)
  }, [warning])

  const handleFileChange =(e)=>{
	const fileInput = e.target

	if(fileInput.files.length>0){
		const selectedFile = fileInput.files[0]
		setSelectedFileName(selectedFile.name)

		setData((prevData) => {
			const newData = [...prevData]
			newData[8] = selectedFile

			return newData
		})
	}
  }

  const handleImageClick = ()=>{
	document.getElementById('file').click()
  }

	const handleSubmit = async(e) => {
		try{
			if (data[0] && data[1] && data[2] && data[3] && data[4] && data[5] && data[6] && data[7]) {
				console.log("everything is ok")
				const response = await fetch('http://localhost:3000/submit', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						// Add other headers if required
					},
					body: JSON.stringify({
						name: data[0], regId: data[1], class_: data[2], course: data[5], department: data[6],
						title: data[3], contact: data[4], description: data[7], file: data[8]
					}), // Send data as a JSON object
				})
			} else {
				setWarning(true)
			}
		}catch(e){
			//
		}
	}

  return (
	  <div className=' ml-[300px] h-[100vh]'>
	  <div className='border-[1px] border-black top-[130px] right-[50px] left-[300px] bottom-[50px] absolute rounded px-[20px] flex justify-center items-center'>
		<div className='px-[40px] py-[20px] flex justify-center items-center'>
		<div className='px-[20px] rounded border-[1px] shadow-xl w-[700px] h-[400px]'>
			<div className={` ${warning?'block':'hidden'} absolute w-[400px] h-[100px] bg-black text-white font-bold top-[200px] left-[400px] flex justify-center items-center z-10`}> ⚠Some important fields required!</div>
		<div className='flex justify-center items-center '>
			<div className='mt-[20px]'>
				<div className='flex justify-center items-center'>
					  <p className='relative font-bold font-system'>SUBMIT</p>
				</div>
			</div>
		</div>
      <div className='md:flex md:justify-center md:items-center md:gap-10 mt-[20px]'>
        <div className='text-[12px] w-[300px]'>
          <div className=' text-black'>
           {inputText.map((s,i)=>{
			return (i == 0||i==1||i==2)?(<>
				<input type="text" placeholder={s.placeholder}
					onChange={(e)=>{
						setData((prevData)=>{
							const newData = [...prevData]
							newData[s.index] = e.target.value
							
							return newData
						})
					}}
					className='w-full px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black'
				/> <br />
			</>):null
		   })} 
            <div className='flex justify-start items-center'>
              <span className='relative w-[50%] '>Course:</span>
              <select
			  		onChange={(e)=>{
						setData((prevData)=>{
							const newData = [...prevData]
							newData[5] = e.target.value
							
							return newData
						})
					}}
					className='outline-none relative w-[50%] rounded bg-white border-2 border-[#04314C] px-[10px]  py-[5px]'
              >		
					<option value="">select</option>
                  {courses.map((course)=>(
                    <option value={course}>{course}</option>
                  ))}
              </select>
            </div>
             <br />
            <div className='flex justify-start items-center'>
              <span className='w-[50%] relative '>Department:</span>
              <select
			  		onChange={(e)=>{
						setData((prevData)=>{
							const newData = [...prevData]
							newData[6] = e.target.value
							
							return newData
						})
					}}
					className='outline-none relative w-[50%] rounded  bg-white border-2 border-black px-[5px] py-[5px]'
              >
					<option value="">select</option>
                  {departments.map((department)=>(
                    <option value={department}>{department}</option>
                  ))}
              </select>
            </div><br /> 
			<span className=''>Title:</span>
			 {inputText.map((s,i)=>{
			return (i == 3||i==4)?(<>
				<input type="text" placeholder={s.placeholder}
					onChange={(e) => {
						setData((prevData) => {
							const newData = [...prevData]
							newData[s.index] = e.target.value

							return newData
						})
					}}
					className='w-full  px-[10px] py-[5px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black'
				/> <br />
			</>):null
		   })} 
          </div>
		  <div>
		  </div>
        </div>
		{/* text area */}
		<div className=' mb-[20px] text-[12px] w-[300px]'>
			<textarea cols="30" rows="9" placeholder='Describe your problem here'
				onChange={(e) => {
						setData((prevData) => {
							const newData = [...prevData]
							newData[7] = e.target.value

							return newData
						})
					}}
				className='w-full  px-[10px] py-[10px] mb-[10px] rounded focus:outline-none bg-white text-black border-2 border-black font-medium'
			></textarea> <br />
			<span className=''>Attach file if any(Optional):</span><br />
			<div>
				<div className='inline-block'>
					<div onClick={handleImageClick} className='inline-block bg-black text-white mb-[15px] w-[30px] mr-[10px] rounded px-[5px] py-[5px] cursor-pointer flex'>
					<Image className='inline-block h-[15px]'/>
					</div>
				</div>
				<span>{selectedFileName?selectedFileName:'no file'}</span>
			</div>
			<input type="file" id="file"
				onChange={handleFileChange}
				className='w-full  hidden px-[10px] mb-[10px] rounded focus:outline-none bg-white text-text font-bold'
			/>
			<div className='flex justify-end items-center'>
				<button className=' text-white w-full font-medium rounded w-full font-medium px-[5px] py-[5px] bg-black'
					onClick={handleSubmit}
				>Send</button>
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