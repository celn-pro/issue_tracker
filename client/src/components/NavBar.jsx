import React, {useState} from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeMenu, setChangeMenu] = useState(false);
  const [showNews, setShowNews] = useState(true);
  const [selectedNav, toggleSelectedNav] = useSelectedNav('Home');

  return (
    <nav className={`${!showNews?'pt-[15px]':''} max-w-full`} >

      <div className={` ${!showNews?'hidden':'block'} max-w-full pl-[20px] py-[5px]`}>
         <span className='border-[1px] cursor-pointer hover:bg-red-200 relative w-[5%] '
          onClick={()=>setShowNews(!showNews)}
         > x</span><i> news</i>
      </div>

      <div className='flex justify-between items-center px-[20px] shadow'>
        <div className='cursor-pointer font-medium'><i>od22</i></div>

         {/* Mobile menu button */}
         <div className="flex md:hidden">
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
                  className='relative w-[40px] border-[1px]'
                >X</span>
              ):(
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
              )}
            </button>
          </div>

         <div className={`absolute border-[1px] w-[100px] bg-white rounded shodow origin-top-right md:hidden top-[50px] transition-all duration-300 ${isOpen?'right-[20px]':'-right-full'} z-10`}>
          <ul className='py-[10px] px-[10px]'>
              <li className='mb-[10px] border-b border-[#333333] cursor-pointer'
                onClick={()=>{
                  toggleSelectedNav('Home')
                  setChangeMenu(!changeMenu)
                  setIsOpen(!isOpen)
                }}
              >Home</li>
              <li className='mb-[10px] border-b border-[#333333] cursor-pointer'
                onClick={()=>{
                  toggleSelectedNav('Submit')
                  setChangeMenu(!changeMenu)
                  setIsOpen(!isOpen)
                }}
              >Submit</li>
              <li className='mb-[10px] border-b border-[#333333] cursor-pointer'
                onClick={()=>{
                  toggleSelectedNav('Track')
                  setChangeMenu(!changeMenu)
                  setIsOpen(!isOpen)
                }}
              >Track</li>
          </ul>
         </div>

         <div className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}>
          <ul className='items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0 '>
              <li className={`${selectedNav == 'Home'?'text-green-600':''} cursor-pointer font-medium hover:text-green-500`}
                onClick={()=>{
                  toggleSelectedNav('Home')
                }}
              ><button>Home</button></li>
              <li className={`${selectedNav == 'Submit'?'text-green-600':''}  cursor-pointer font-medium hover:text-green-500`}
                onClick={()=>{
                  toggleSelectedNav('Submit')
                }}
              ><button>Submit</button></li>
              <li className={`${selectedNav == 'Track'?'text-green-600':''} cursor-pointer font-medium hover:text-green-500`}
                onClick={()=>{
                  toggleSelectedNav('Track')
                }}
              ><button>Track</button></li>
          </ul>
         </div>
      </div>
    </nav>
  )
}

export default NavBar