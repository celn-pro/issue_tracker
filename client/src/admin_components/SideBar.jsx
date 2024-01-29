import React from 'react'

import {User, BarChart, Lock, Share, Layout, LogOut, Settings, Moon} from 'lucide-react'
import { useSelectedAdminSideBar } from '../hooks/useSelectedAdminSideBar'

import { ADMIN_SIDEBAR } from '../constants'

const SideBar = () => {
	const [selectedAdminSideBar, toggleSelectedAdminSideBar] = useSelectedAdminSideBar()
	
  return (
	<div className='bg-white w-[300px] h-[100vh] absolute top-0 left-0 px-[50px] py-[50px] font-sans font-bold text-black text-[12px]'>
		<div className='border-[1px] border-black px-[20px] py-[20px] rounded h-full'>
			<div>
				{ADMIN_SIDEBAR.map((s)=>{
					return (s.name =='Profile'|| s.name =='Aunthenticate' || s.name =='Stats' || s.name == 'WorkBoard'|| s.name == 'Delegate')?
						<div className={` ${selectedAdminSideBar == s.name ? 'bg-yellow-300' : ''} px-[10px] flex justify-start items-center gap-5 mb-[10px] cursor-pointer rounded `} onClick={() => toggleSelectedAdminSideBar(s.name)}>{s.icon} <div className='inline-block'>{s.name}</div></div>:null
				})}
			</div>
			<div className='bottom-[70px] absolute w-[160px]'>
				{ADMIN_SIDEBAR.map((s) => {
					return (s.name == 'Logout' || s.name == 'Settings' || s.name == 'Dark') ?
					<div className={` ${selectedAdminSideBar == s.name ? 'bg-yellow-300' : ''} px-[10px] flex justify-start items-center gap-5 mb-[10px] cursor-pointer rounded`} onClick={()=> toggleSelectedAdminSideBar(s.name)}>{s.icon} <div className='inline-block'>{s.name}</div></div> : null
				})}
			</div>
		</div>
	</div>
  )
}

export default SideBar