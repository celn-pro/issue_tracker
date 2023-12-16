import React, {useState} from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav';
import {usePrevSelectedNav} from '../hooks/usePrevSelectedNav'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeMenu, setChangeMenu] = useState(false);
  const [showNews, setShowNews] = useState(true);
  const [selectedNav, toggleSelectedNav] = useSelectedNav();
  const [prevSelectedNav, togglePrevSelectedNav] = usePrevSelectedNav();


  return (
    <nav className={`${!showNews?'pt-[15px]':''} max-w-full transition-all duration-300`} >

      <div className={` ${!showNews?'hidden':'block'} max-w-full pl-[20px] py-[5px]`}>
         <span className='border-[1px] cursor-pointer hover:bg-red-200 relative w-[5%] '
          onClick={()=>setShowNews(!showNews)}
         > x</span><i> news</i>
      </div>

      <div className='flex justify-between items-center px-[20px] shadow'>
        <div className='cursor-pointer font-medium'><i>od22</i></div>

         {/* Mobile menu button */}
         <div className="flex md:hidden">
            <div 
                className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] hover:bg-gray-200 rounded-[50%] mr-[10px]'
                onClick={()=>{
                var holder = prevSelectedNav
                togglePrevSelectedNav(selectedNav)
                toggleSelectedNav(holder)
              }}><img src='icons/undo.png'
              className='h-[10px] '
            /></div>
            
            <div 
                className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] hover:bg-gray-200 rounded-[50%] mr-[10px]'
                onClick={()=>{
                var holder = prevSelectedNav
                togglePrevSelectedNav(selectedNav)
                toggleSelectedNav(holder)
                }}><img src='icons/redo.png'
                  className='h-[10px] '
            /></div>

            <div 
                  className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] hover:bg-gray-200 rounded-[50%] mr-[10px]'
                  onClick={()=>{
                    // var holder = prevSelectedNav
                    // togglePrevSelectedNav(selectedNav)
                    // toggleSelectedNav(holder)
                    }}><img src='icons/brightness-and-contrast.png'
                  className='h-[15px]'
            /></div>
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
              <li className={`${selectedNav == 'Home'?'text-green-600':''} mb-[10px] border-b border-[#333333] cursor-pointer`}
                onClick={()=>{
                  togglePrevSelectedNav(selectedNav)
                  toggleSelectedNav('Home')
                  setChangeMenu(!changeMenu)
                  setIsOpen(!isOpen)
                }}
              >Home</li>
              <li className={`${selectedNav == 'Submit'?'text-green-600':''} mb-[10px] border-b border-[#333333] cursor-pointer`}
                onClick={()=>{
                  togglePrevSelectedNav(selectedNav)
                  toggleSelectedNav('Submit')
                  setChangeMenu(!changeMenu)
                  setIsOpen(!isOpen)
                }}
              >Submit</li>
              <li className={`${selectedNav == 'Track'?'text-green-600':''} mb-[10px] border-b border-[#333333] cursor-pointer`}
                onClick={()=>{
                  togglePrevSelectedNav(selectedNav)
                  toggleSelectedNav('Track')
                  setChangeMenu(!changeMenu)
                  setIsOpen(!isOpen)
                }}
              >Track</li>
              <li className={`${selectedNav == 'WelcomeHod'?'text-green-600 block':'hidden'} mb-[10px] border-b border-[#333333] cursor-pointer`}
                onClick={()=>{
                  togglePrevSelectedNav(selectedNav)
                  toggleSelectedNav('SignupHod')
                  setChangeMenu(!changeMenu)
                  setIsOpen(!isOpen)
                }}
              >Signup</li>
              <li className={`${selectedNav == 'WelcomeHod'?'text-green-600 block':'hidden'} mb-[10px] border-b border-[#333333] cursor-pointer`}
                onClick={()=>{
                  togglePrevSelectedNav(selectedNav)
                  toggleSelectedNav('LoginHod')
                  setChangeMenu(!changeMenu)
                  setIsOpen(!isOpen)
                }}
              >Login</li>
              <li className={`${selectedNav == 'WelcomeStaff'?'text-green-600 block':'hidden'} mb-[10px] border-b border-[#333333] cursor-pointer`}
                onClick={()=>{
                  togglePrevSelectedNav(selectedNav)
                  toggleSelectedNav('SignupStaff')
                  setChangeMenu(!changeMenu)
                  setIsOpen(!isOpen)
                }}
              >Signup</li>
              <li className={`${selectedNav == 'WelcomeStaff'?'text-green-600 block':'hidden'} mb-[10px] border-b border-[#333333] cursor-pointer`}
                onClick={()=>{
                  togglePrevSelectedNav(selectedNav)
                  toggleSelectedNav('SignupStaff')
                  setChangeMenu(!changeMenu)
                  setIsOpen(!isOpen)
                }}
              >Login</li>
          </ul>
         </div>

         <div className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}>
          <ul className='items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0 '>
              <li>
              <div 
                className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] hover:bg-gray-200 rounded-[50%] mr-[10px]'
                onClick={()=>{
                var holder = prevSelectedNav
                togglePrevSelectedNav(selectedNav)
                toggleSelectedNav(holder)
              }}><img src='icons/undo.png'
              className='h-[10px] '
            /></div>
              </li>
              <li>
                <div 
                  className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] hover:bg-gray-200 rounded-[50%] mr-[10px]'
                  onClick={()=>{
                    var holder = prevSelectedNav
                    togglePrevSelectedNav(selectedNav)
                    toggleSelectedNav(holder)
                    }}><img src='icons/redo.png'
                  className='h-[10px]'
              /></div>
              </li>
              <li>
                <div 
                  className='cursor-pointer h-[20px] flex justify-center items-center w-[20px] hover:bg-gray-200 rounded-[50%] mr-[10px]'
                  onClick={()=>{
                    // var holder = prevSelectedNav
                    // togglePrevSelectedNav(selectedNav)
                    // toggleSelectedNav(holder)
                    }}><img src='icons/brightness-and-contrast.png'
                  className='h-[15px]'
              /></div>
              </li>
              <li className={`${selectedNav == 'Home'?'text-green-600':''} cursor-pointer font-medium hover:text-green-500`}
                onClick={()=>{
                  togglePrevSelectedNav(selectedNav)
                  toggleSelectedNav('Home')
                }}
              ><button>Home</button></li>
              <li className={`${selectedNav == 'Submit'?'text-green-600':''}  cursor-pointer font-medium hover:text-green-500`}
                onClick={()=>{
                  togglePrevSelectedNav(selectedNav)
                  toggleSelectedNav('Submit')
                }}
              ><button>Submit</button></li>
              <li className={`${selectedNav == 'Track'?'text-green-600':''} cursor-pointer font-medium hover:text-green-500`}
                onClick={()=>{
                  togglePrevSelectedNav(selectedNav)
                  toggleSelectedNav('Track')
                }}
              ><button>Track</button></li>
              <li className={`${selectedNav=='WelcomeHod'?'block':'hidden'}`}>
                <button className={` rounded  bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]`}
                  onClick={()=>{
                    togglePrevSelectedNav(selectedNav)
                    toggleSelectedNav('SignupHod')
                  }}
                >Signup</button>
              </li>
              <li className={`${selectedNav=='WelcomeHod'?'block':'hidden'}`}>
                <button className={`rounded bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]`}
                  onClick={()=>{
                      togglePrevSelectedNav(selectedNav)
                      toggleSelectedNav('LoginHod')
                  }}
                >Login</button>
              </li>
              <li className={`${selectedNav=='WelcomeStaff'?'block':'hidden'}`}>
                <button className={`${selectedNav=='WelcomeStaff'?'block':'hidden'} rounded  bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]`}
                  onClick={()=>{
                    togglePrevSelectedNav(selectedNav)
                    toggleSelectedNav('SignupStaff')
                  }}
                >Signup</button>
              </li>
              <li className={`${selectedNav=='WelcomeStaff'?'block':'hidden'}`}>
                <button className={` rounded bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]`}
                  onClick={()=>{
                    togglePrevSelectedNav(selectedNav)
                    toggleSelectedNav('LoginStaff')
                    
                  }}
                >Login</button>
              </li>
              
          </ul>
         </div>
      </div>
    </nav>
  )
}

export default NavBar