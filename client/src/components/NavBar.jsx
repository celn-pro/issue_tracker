import React, {useState} from 'react'
import {useSelectedNav} from '../hooks/useSelectedNav';
import {usePrevSelectedNav} from '../hooks/usePrevSelectedNav'
import { sectionInfo } from '../constants'

import SideBar from './SideBar'

import {ICONS_INFO, SELECTED_PAGES} from '../constants';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeMenu, setChangeMenu] = useState(false);
  const [showNews, setShowNews] = useState(true);
  const [selectedNav, toggleSelectedNav] = useSelectedNav();
  const [prevSelectedNav, togglePrevSelectedNav] = usePrevSelectedNav();

  return (
    <div className={`${selectedNav=='Logged'?'hidden':''} ml-[300px] max-800:ml-[50px] mt-[50px] mr-[50px] text-black`} >

      <div className={` ${!showNews?'hidden':'hidden'} py-[5px] flex justify-start gap-[10px]`}>
			  <div className='rounded cursor-pointer bg-black text-white relative w-[20px] flex justify-center items-center rounded'
          onClick={()=>setShowNews(!showNews)}
			  > x</div><span className='text-[12px] italic font-bold'>Take care of Red eyes infections!</span> 
      </div>

		<div className='flex justify-between items-center bg-black rounded px-[20px] py-[5px]'>
        <div className='cursor-pointer font-medium text-white'><i>od22</i></div>

         {/* Mobile menu button */} 
         <div className="max-800:flex hidden max-800:block">
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

		  <div className={`absolute w-[150px] bg-white rounded shodow origin-top-right ${showNews ?'top-[70px]':'top-[132px]'} transition-all duration-300 ${isOpen?'right-[53px] block':'-right-full hidden'} z-40`}>
				<div className=' px-[10px] py-[20px] rounded h-full text-black'>
					<div>
						{sectionInfo.map((s) => {
							return <div className={`${selectedNav === s.name ? 'bg-yellow-300 ' : ''} ${((selectedNav == 'LoginStaff' || selectedNav == 'SignupStaff') && s.name == 'WelcomeStaff') ? 'bg-yellow-300' : ''}
					${((selectedNav == 'LoginHod' || selectedNav == 'SignupHod') && s.name == 'WelcomeHod') ? 'bg-yellow-300' : ''}
					${((selectedNav == 'Submit' || selectedNav == 'Congrats') && s.name == 'Submit') ? 'bg-yellow-300' : ''}
					flex justify-start items-center gap-5 mb-[10px] cursor-pointer rounded px-[10px]`} onClick={() => {
									togglePrevSelectedNav(selectedNav)
									toggleSelectedNav(s.name)
									setChangeMenu(!changeMenu)
									setIsOpen(!isOpen)
								}}>{s.icon} <div className='inline-block'>{s.message}</div></div>
						})}
					</div>
				</div>
         </div>
			  <button className={`absolute ${showNews ? 'top-[70px]' : 'top-[130px]'} transition-all duration-300 ${isOpen ? 'right-[50px] left-[50px] bottom-[50px] vissible rounded bg-black opacity-50' : ' hidden'} z-30 `}
			  	onClick={()=>{
						setChangeMenu(!changeMenu)
						setIsOpen(!isOpen)
				}}
				></button>
		
		{/* destop navbar */}
         <div className={` flex justify-self-center max-800:mt-8  block pb-0 mt-0 max-800:hidden`}>
          <ul className='items-center justify-end max-800:space-y-8 flex space-y-0 '>
				{ICONS_INFO.map(i => {
					return <li
						className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] bg-[#FFFFFF] hover:bg-white rounded-[50%] mr-[10px]'
						onClick={() => {
							var holder = prevSelectedNav
							{
								if (i.togglePrevSelectedNav && i.toggleSelectedNav) {
									togglePrevSelectedNav(selectedNav)
									toggleSelectedNav(holder)
								}
							}
						}}><img src={i?.source} className='h-[10px] ' /></li>
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