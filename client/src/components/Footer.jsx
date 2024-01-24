import React from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav'
import { usePrevSelectedNav } from '../hooks/usePrevSelectedNav'

import { sectionInfo } from '../constants'


const Footer = () => {
	const [selectedNav, toggleSelectedNav] = useSelectedNav();
	const [prevSelectedNav, togglePrevSelectedNav] = usePrevSelectedNav()
  return (
	  <div className=' relative md:px-[0px] w-full bg-white mb-[20px] px-[20px]'>
		  <h2 className='font-cursive font-bold px-[20px]'>QUICK LINKS:</h2>
		  <div className='px-[20px] rounded py-4 items-center border-[1px]'>
			  <div>
				  <ul className='relative grid grid-cols-2 gap-3 justify-center items-center w-full'>
					  {sectionInfo.map((s,i) => {  
						if(s.name == 'Track'){
							return null
						}
						return  <li className={` ${(i == 0 || i == 5) ? 'col-span-2 bg-[#F6A316]' : 'bg-[#04314C] text-white'} 
						${i == 5 ?'!bg-[#04314C] !text-white':''} underline font-bold font-cursive cursor-pointer flex justify-center 
						items-center rounded w-full h-[50px] font-medium px-[5px] py-[5px]`}
							  onClick={() => {
								  togglePrevSelectedNav(selectedNav)
								  toggleSelectedNav(s.name)
							  }}
						  >{s.message}</li>
							})}
				  </ul></div>
		  </div>
	  </div>
  )
}

export default Footer