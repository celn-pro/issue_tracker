import React, {useEffect, useState} from 'react'
import {Check} from 'lucide-react'

import {PERSON} from '../../constants'

const Settings = ({userData}) => {
	const [showSaved, setShowSaved] = useState(false)
	const [change, setChange] = useState(false)
	const [index, setIndex] = useState(null)

	useEffect(()=>{
		setTimeout(()=>{
			setIndex(null)
		}, 2000)
	},[showSaved])
  return (
	  <div className='h-[100vh] ml-[300px]'>
		  <div className=' bottom-[50px] rounded top-[50px] right-[50px] left-[350px] absolute border-[1px] px-[20px] py-[20px]'>
			<div className='border-[1px] px-[10px] py-[10px] font-bold'>
				<div className='text-[28px]'>Security & Settings</div>
				{PERSON.map((s) => {
					return <div>
						<div>{s.name}: {s.text}</div>
					</div>
				})}
				<button className='px-[10px] py-[5px] bg-[#04314C] rounded text-white text-[12px]' onClick={()=>setChange(!change)}>Change</button>
			</div>

			<div className={`${change?'block':'hidden'} rounded h-[500px] absolute z-10 bg-white bottom-[50px] right-[100px] left-[150px] px-[10px] py-[10px]`}>
				<div className='rounded border-[1px] w-full h-full px-[20px] py-[20px]'>
					<div className='flex justify-end items-center'>
						<div className='bg-[#04314C] w-[20px] text-white rounded text-center cursor-pointer' onClick={()=>setChange(!change)}>x</div>
					</div>
					<div className='font-bold'>
						{PERSON.map((s) => {
							return <div>
								<div>{s.name}: {s.text}</div>
								<div>new {s.name}
									<input type="text" placeholder={s.text} className='w-[400px] ml-[20px] enabled outline-none px-[10px] py-[10px] border-[1px] rounded text-green-500 font-bold' onChange={(e)=>{
										setChangeValue(e.target.value)
									}} />
								</div>
							</div>
						})}
						<div>
							<button className='bg-green-600 w-[100px] px-[10px] py-[5px] rounded text-white' onClick={()=>{
								setChange(!change)
								setShowSaved(!showSaved)
								setIndex(0)
							}}>Save</button>
						</div>
						
					</div>
				</div>
			</div>
			<div className={`${index !=null?'block':'hidden'} flex justify-center`}>
				<div className=' text-white bg-black w-[300px] h-[70px] text-center text-[12px] pt-[10px] rounded'>
					  <div>Saved changes successfully! </div>
					  <div className='flex justify-center'> <Check /></div>
				</div>
			</div>
			<button className={`${change?'block':'hidden'} w-full h-full absolute z-9 bg-black bottom-[50px] rounded top-[0px] right-[0px] opacity-50`} onClick={()=>setChange(!change)}></button>
		</div>
	  </div>
  )
}

export default Settings