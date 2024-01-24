import React from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav'
import { usePrevSelectedNav } from '../hooks/usePrevSelectedNav';

import { sectionInfo, SELECTED_PAGES } from '../constants';

const WelcomeHod = () => {
  const [selectedNav, toggleSelectedNav] = useSelectedNav();
  const [prevSelectedNav, togglePrevSelectedNav] = usePrevSelectedNav();

  return (
    <div className='md:px-[200px] px-[20px]'>
      <div className='flex justify-center items-center'>
        <div className='relative mt-[20px]'>
			<p className='border-[1px] py-[10px] px-[10px] rounded font-verdan'>
            Welcome Head of Department we are really honored to have you here,
            we are looking forwarding to collaborating with you and make sure that all
            the submitted challenges are resolved. we appriciete you taking your time
            joining with us.
          </p>
        </div>
      </div>

        <div className='flex justify-center items-center '>
            <div className='md:flex justify-center items-center md:gap-5 mt-[20px] w-full '>
				{SELECTED_PAGES.map((s)=>{
					if(s.name == 'SignupHod'|| s.name == 'LoginHod'){
						return <button className={` ${s.name == 'SignupHod' ? 'bg-white text-[#04314C] border-2 border-[#04314C]' : 'bg-[#04314C] text-white'} rounded w-full h-[50px] font-medium px-[5px] py-[5px] mb-[10px] `}
							onClick={() => {
								togglePrevSelectedNav(selectedNav)
								toggleSelectedNav(s.name)
							}}
						>{s.label}</button>
					}
					return null
				})}
            </div>
        </div>

        <div>
            <div className='px-[20px] mt-[20px] border-[1px]'>
            <h2 className='mb-[10px] font-cursive font-bold'>QUICK LINKS:</h2>
				  <ul className='relative grid grid-cols-3 max-[600px]:grid-cols-2 gap-3 justify-center items-center w-full'>
					{sectionInfo.map((s)=>{
						if(s.name != selectedNav){
							return <li className={`underline font-bold font-cursive cursor-pointer flex justify-center
							 items-center bg-[#04314C] text-white  rounded  h-[50px] font-medium px-[5px] py-[5px]`}
								onClick={() => {
									togglePrevSelectedNav(selectedNav)
									toggleSelectedNav(s.name)
								}}
							>{s.message}</li>
						}
						return null
					})}
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default WelcomeHod