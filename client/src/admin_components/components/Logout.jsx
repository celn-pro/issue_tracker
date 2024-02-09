import React from 'react'
import { useAtom } from 'jotai'

import { userDataAtom } from '../../components/LoginHod'

import {useSelectedAdminSideBar} from '../../hooks/useSelectedAdminSideBar'
import { useSelectedNav } from '../../hooks/useSelectedNav'


const Logout = (props) => {

	const toggleSelectedAdminSideBar = useSelectedAdminSideBar()[1]
	const setUserData = useAtom(userDataAtom)[1]
	const toggleSelectedNav = useSelectedNav()[1]


	//const userData = props.userData
	
  return (
	  <div className='h-[100vh] ml-[300px]'>
		  <div className=' bottom-[50px] rounded top-[50px] right-[50px] left-[350px] absolute border-[1px] py-[20px] px-[20px]'>
			<div className='flex justify-center items-center w-full h-full'>
				<div className='border-[1px] w-[200px] px-[20px] py-[20px]'>
					<div>⚠ Loging out</div>
					<div className='flex gap-3 font-bold text-white'>
						<button className='bg-green-600 rounded px-[10px] py-[5px]' onClick={()=>toggleSelectedAdminSideBar('Stats')}>Cancel</button>
						<button className='bg-red-600 rounded px-[10px] py-[5px]' onClick={()=>{
							setUserData(null)
							toggleSelectedNav('LoginHod')
						}}>Confirm</button>
					</div>
				</div>
			</div>
		  </div>
	  </div>
  )
}

export default Logout