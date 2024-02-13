import React from 'react'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'

import { hodDataAtom } from '../../components/LoginHod'

import {useSelectedAdminSideBar} from '../../hooks/useSelectedAdminSideBar'
import { useSelectedNav } from '../../hooks/useSelectedNav'


const Logout = (props) => {

	const toggleSelectedAdminSideBar = useSelectedAdminSideBar()[1]
	const setUserData = useAtom(hodDataAtom)[1]
	const toggleSelectedNav = useSelectedNav()[1]

	const navigate = useNavigate()

	//const userData = props.userData
	
  return (
	  <div className='h-[100vh] ml-[300px] max-800:ml-0'>
		  <div className=' bottom-[50px] rounded top-[50px] right-[50px] max-800:left-[50px] left-[350px] absolute max-800:border-none border-[1px] py-[20px] px-[20px]'>
			<div className='flex justify-center items-center w-full h-full'>
				<div className='border-[1px] w-[200px] px-[20px] py-[20px]'>
					<div>⚠ Loging out</div>
					<div className='flex gap-3 font-bold text-white'>
						<button className='bg-green-600 rounded px-[10px] py-[5px]' onClick={()=>toggleSelectedAdminSideBar('Stats')}>Cancel</button>
						<button className='bg-red-600 rounded px-[10px] py-[5px]' onClick={()=>{
							setUserData(null)
							navigate('/')
						}}>Confirm</button>
					</div>
				</div>
			</div>
		  </div>
	  </div>
  )
}

export default Logout