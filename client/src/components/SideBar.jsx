import React from 'react'

import {User, BarChart, Lock, Share, Layout, LogOut, Settings, Moon} from 'lucide-react'

const SideBar = () => {
	
  return (
	<div className='bg-black w-[300px] h-[100vh] absolute top-0 left-0 px-[50px] py-[50px] font-fantansy font-semiblod text-[12px]'>
		<div className='border-[1px] border-[#777] px-[20px] py-[20px] rounded h-full text-white'>
			<div>
				  <div className='flex justify-start items-center gap-5 mb-[10px] cursor-pointer'><User className='w-[15px]' /> <div className='inline-block'>Profile</div></div>
				  <div className='flex justify-start items-center gap-5 mb-[10px] cursor-pointer'><BarChart className='w-[15px]'/> <div className='inline-block'>Stats</div></div>
				  <div className='flex justify-start items-center gap-5 mb-[10px] cursor-pointer'><Lock className='w-[15px]' /> <div className='inline-block'>Aunthenticate</div></div>
				  <div className='flex justify-start items-center gap-5 mb-[10px] cursor-pointer'><Share className='w-[15px]' /> <div className='inline-block'>Delegate</div></div>
				  <div className='flex justify-start items-center gap-5 mb-[10px] cursor-pointer'><Layout className='w-[15px]' /> <div className='inline-block'>Work-board</div></div>
			</div>
			<div className='bottom-[70px] absolute'>
				  <div className='flex justify-start items-start gap-5 mb-[10px] cursor-pointer'><LogOut className='w-[15px]' /> <div className='inline-block'>Logout</div></div>
				  <div className='flex justify-start items-center gap-5 cursor-pointer'><Settings className='w-[15px]' /> <div className='inline-block'>Settings</div></div>
				  <div className='flex justify-start items-center gap-5 cursor-pointer mb-[10px]'><Moon className='w-[15px]' /> <div className='inline-block'>Dark</div></div>

			</div>
		</div>
	</div>
  )
}

export default SideBar