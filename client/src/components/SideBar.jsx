import React from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav'
import { usePrevSelectedNav } from '../hooks/usePrevSelectedNav'

import { User, BarChart, Lock, Share, Layout, LogOut, Settings, Moon } from 'lucide-react'
import { useSelectedAdminSideBar } from '../hooks/useSelectedAdminSideBar'

import { ADMIN_SIDEBAR, sectionInfo } from '../constants'

const SideBar = () => {
	const [selectedNav, toggleSelectedNav] = useSelectedNav();
	const [prevSelectedNav, togglePrevSelectedNav] = usePrevSelectedNav()

	return (
		<div className='bg-white w-[300px] h-[100vh] absolute top-0 left-0 px-[50px] py-[50px] font-sans font-bold text-[12px]'>
			<div className='border-[1px] border-black px-[20px] py-[20px] rounded h-full text-black'>
				<div>
					{sectionInfo.map((s) => {
						return <div className={`flex justify-start items-center gap-5 mb-[10px] cursor-pointer rounded `} onClick={() => {
								togglePrevSelectedNav(selectedNav)
								toggleSelectedNav(s.name)
							}}>{s.icon} <div className='inline-block'>{s.message}</div></div> 
					})}
				</div>
				{/* <div className='bottom-[70px] absolute w-[160px]'>
				
				</div> */}
			</div>
		</div>
	)
}

export default SideBar