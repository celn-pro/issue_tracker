import React, {useState} from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav';
import {usePrevSelectedNav} from '../hooks/usePrevSelectedNav'

import { sectionInfo, ICONS_INFO, SELECTED_PAGES } from '../constants';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeMenu, setChangeMenu] = useState(false);
  const [showNews, setShowNews] = useState(true);
  const [selectedNav, toggleSelectedNav] = useSelectedNav();
  const [prevSelectedNav, togglePrevSelectedNav] = usePrevSelectedNav();

  return (
    <div className={`${selectedNav=='SignupHod'?'':''} ml-[300px] mt-[50px] bg-white mr-[50px] text-black`} >

      <div className={` ${!showNews?'hidden':'block'} py-[5px] flex justify-start gap-[10px]`}>
			  <div className='rounded cursor-pointer bg-black text-white relative w-[20px] flex justify-center items-center rounded'
          onClick={()=>setShowNews(!showNews)}
			  > x</div><span><i>Take care of Red eyes infections!</i></span> 
      </div>

		<div className='flex justify-between items-center bg-black rounded px-[20px] py-[5px]'>
        <div className='cursor-pointer font-medium text-white'><i>od22</i></div>

         {/* Mobile menu button */}
         <div className="flex md:hidden">
            {ICONS_INFO.map(i => {
				return <div
					className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] bg-[#FFFFFF] hover:bg-white rounded-[50%] mr-[10px]'
						onClick={() => {
						var holder = prevSelectedNav
							{ if (i.togglePrevSelectedNav && i.toggleSelectedNav){
								togglePrevSelectedNav(selectedNav)
								toggleSelectedNav(holder)
							}if (i.darkTheme) {
								
							} else {
								
							}}
					}}><img src={i?.source} className='h-[15px] '/></div>
			})}
            <button 
              type="button"
              className="text-gray-500 dark:text-gray-200 w-[30px] focus:outline-none"
              aria-label="toggle menu"
              onClick={() => {
                setIsOpen(!isOpen)
                setChangeMenu(!changeMenu);
              }}
            >
              {changeMenu?(
                <span
                  className='relative w-[40px] border-[1px] px-[5px] rounded hover:bg-red-200'
                >X</span>
              ):(
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
              )}
            </button>
          </div>

			  <div className={`absolute border-[1px] w-[120px] bg-white rounded shodow origin-top-right md:hidden ${showNews ?'top-[70px]':'top-[36px]'} transition-all duration-300 ${isOpen?'right-[20px]':'-right-full hidden'} z-10`}>
          <ul className='py-[10px] px-[10px]'>
              {SELECTED_PAGES.map(p => {
				 if(p.name=='Home'){
					 return <li className={`${selectedNav == p.name ? 'text-green-600' : ''} mb-[10px] border-b border-[#333333] cursor-pointer`}
						 onClick={() => {
							 if (p.togglePrevSelectedNav && p.toggleSelectedNav && p.setChangeMenu && p.setIsOpen) {
								 togglePrevSelectedNav(selectedNav)
								 toggleSelectedNav(p.name)
								 setChangeMenu(!changeMenu)
								 setIsOpen(!isOpen)
							 }
						 }}
					 >{p?.label ?? p.name}</li>
				 }
				 return null
			  })}
          </ul>
         </div>
			  <button className={`absolute ${showNews ? 'top-[70px]' : 'top-[36px]'} transition-all duration-300 ${isOpen ? 'right-[20px] vissible w-full h-[100vh] bg-black opacity-50' : 'hidden -right-full hidden'} z-9 `}
			  	onClick={()=>{
						setChangeMenu(!changeMenu)
						setIsOpen(!isOpen)
				}}
			  ></button>
		
		{/* destop navbar */}
         <div className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}>
          <ul className='items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0 '>
				{ICONS_INFO.map(i => {
					return <div
						className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] bg-[#FFFFFF] hover:bg-white rounded-[50%] mr-[10px]'
						onClick={() => {
							var holder = prevSelectedNav
							{
								if (i.togglePrevSelectedNav && i.toggleSelectedNav) {
									togglePrevSelectedNav(selectedNav)
									toggleSelectedNav(holder)
								} if (i.darkTheme) {

								} else {

								}
							}
						}}><img src={i?.source} className='h-[10px] ' /></div>
				})}
				{SELECTED_PAGES.map(p=>{
					if(p.name=='Home'){
						return <li className={`${selectedNav == p.name ? 'bg-[#F6A316] rounded-xl px-[20px] text-white' : ' bg-white text-[#04314C] rounded-xl px-[20px]'} cursor-pointer font-medium`}
							onClick={() => {
								togglePrevSelectedNav(selectedNav)
								toggleSelectedNav(p.name)
							}}
						><button>{p?.label ?? p.name}</button></li>
					}
					return null
				})}
              
          </ul>
         </div>
      </div>
    </div>
  )
}

export default NavBar