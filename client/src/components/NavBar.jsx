import React, {useState} from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav';
import {usePrevSelectedNav} from '../hooks/usePrevSelectedNav'

import { sectionInfo, NAVINFO, SELECTED_PAGES } from '../constants';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeMenu, setChangeMenu] = useState(false);
  const [showNews, setShowNews] = useState(true);
  const [selectedNav, toggleSelectedNav] = useSelectedNav();
  const [prevSelectedNav, togglePrevSelectedNav] = usePrevSelectedNav();

  return (
    <nav className={`${!showNews?'pt-[15px]':''} px-[20px] mx-[15px] border-[1px] border-b-transparent max-w-full transition-all duration-300`} >

      <div className={` ${!showNews?'hidden':'block'} max-w-full bored-[3px] py-[5px] flex justify-start gap-[10px]`}>
         <div className='border-[1px] cursor-pointer hover:bg-red-200 relative w-[20px] flex justify-center items-center rounded'
          onClick={()=>setShowNews(!showNews)}
			  > x</div><span><i>news</i></span> 
      </div>

		<div className='flex justify-between items-center px-[20px] border-[1px]  h-[50px] rounded'>
        <div className='cursor-pointer font-medium'><i>od22</i></div>

         {/* Mobile menu button */}
         <div className="flex md:hidden">
            {NAVINFO.map(i => {
				return <div
						className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] hover:bg-gray-200 rounded-[50%] mr-[10px]'
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
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => {
                setIsOpen(!isOpen)
                setChangeMenu(!changeMenu);
              }}
            >
              {changeMenu?(
                <span
                  className='relative w-[40px] border-[1px] hover:bg-red-200'
                >X</span>
              ):(
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
              )}
            </button>
          </div>

         <div className={`absolute border-[1px] w-[100px] bg-white rounded shodow origin-top-right md:hidden top-[56px] transition-all duration-300 ${isOpen?'right-[20px]':'-right-full'} z-10`}>
          <ul className='py-[10px] px-[10px]'>
              {SELECTED_PAGES.map(p => {
				  return <li className={`${selectedNav == p.name ? 'text-green-600' : ''} mb-[10px] border-b border-[#333333] cursor-pointer`}
					  		onClick={() => {
							if(p.togglePrevSelectedNav&&p.toggleSelectedNav&&p.setChangeMenu&&p.setIsOpen){
								togglePrevSelectedNav(selectedNav)
								toggleSelectedNav(p.name)
								setChangeMenu(!changeMenu)
								setIsOpen(!isOpen)
							}
					  }}
				  >{p?.label??p.name}</li>
			  })}
          </ul>
         </div>

         <div className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}>
          <ul className='items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0 '>
				{NAVINFO.map(i => {
					return <div
						className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] hover:bg-gray-200 rounded-[50%] mr-[10px]'
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
					return <li className={`${selectedNav == p.name ? 'text-green-600' : ''} cursor-pointer font-medium hover:text-green-500`}
							onClick={() => {
							togglePrevSelectedNav(selectedNav)
							toggleSelectedNav(p.name)
						}}
					><button>{p?.label??p.name}</button></li>
				})}
              
          </ul>
         </div>
      </div>
    </nav>
  )
}

export default NavBar