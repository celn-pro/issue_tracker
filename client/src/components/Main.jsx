import React, { useState } from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav'
import { usePrevSelectedNav } from '../hooks/usePrevSelectedNav'

import { sectionInfo } from '../constants'

const Main = () => {
    const [showParagraph, setShowParagraph] =useState(false)
    const [selectedNav, toggleSelectedNav] = useSelectedNav();
    const [prevSelectedNav, togglePrevSelectedNav] = usePrevSelectedNav()

  return (
	  <div className='mx-[15px] border-[1px] border-b-transparent border-t-transparent'>
        <div className=' mt-[30px] relative px-[20px] flex justify-center items-center mb-[30px]'>
            <div>
            <h1 className='mb-[10px] text-[15px] font-system font-bold'>DAR ES SALAAM INSTITUTE OF TECHNOLOGY</h1>
            <p className='pl-[20%] font-mono font-bold'>SUBMIT/TRACK CHALLENGES</p>
            </div>
        </div>
        <div className='flex justify-start items-center px-[20px]'>
			  <div className='relative border-[1px] rounded px-[20px] py-4'>
                {showParagraph?(
                    <p className='transition-all duration-300 font-verdan'
                    >
                        Welcome to DIT report program, your one-stop solution for submitting and tracking the
                        progress of your issues. With our user-friendly interface you can effortlessly report
                        problems concerning academic results, registration problems, soma website not working/responding
                        and many more, to make it more smoother remember you can always hover over the question mark icon 
                        located on the right of each field. These hints will provide valuable information and guadance
                        ensuring that you have seamless and effient experience while using the platform. Your feedback 
                        is crucial and we are here to make sure your concerns are addressed swiftly and complehensively. 
                        <span className='hover:text-gray-400 cursor-pointer text-gray-300 pl-[20px]'
							onClick={()=> {
								window.scrollTo({
									top:0,
									behavior:'smooth'
								})
								setShowParagraph(!showParagraph)
							}}
                      > read less</span>
                    </p>
                ):( 
                    <p className='cursor-pointer font-verdan'
                >
                    Welcome to DIT report program, your one-stop solution for submitting and tracking the
					progress of your issues. With our user-friendly interface you can effortlessly report
                    problems concerning.... <span className='hover:text-gray-400 text-gray-300'
                    onClick={()=> setShowParagraph(!showParagraph)}
                    >read more</span>
                </p>
                )}
            </div>
        </div>

        <div className='px-[20px]'>
            <div className='flex flex-col justify-between gap-5 mt-[20px] px-[20px]'>
             {sectionInfo.map(s => {
				if(s.name == 'Track' || s.name=='Submit'){
					return <button className='rounded bg-green-700 text-white w-full h-[50px] md:w-[400px] hover:bg-green-600 font-medium px-[5px] py-[5px]'
						onClick={() => {
						togglePrevSelectedNav(selectedNav)
						toggleSelectedNav(s.name)
						}}
					>{s.message}</button>
				}
			 })}
            </div>
        </div>

        <div className='px-[20px]'>
			  <div className='px-[20px] mt-[50px] flex justify-start rounded py-4 items-center border-[1px]'>
				  <div><h2 className='mb-[10px] font-cursive font-bold'>QUICK LINKS:</h2>
					  <ul>
						  {sectionInfo.map(s => (
							  <li className='underline font-bold font-cursive hover:text-gray-500 cursor-pointer'
								  onClick={() => {
									  togglePrevSelectedNav(selectedNav)
									  toggleSelectedNav(s.name)
								  }}
							  >{s.message}</li>
						  ))}
					  </ul></div>
            </div>
        </div>
    </div>
  )
}

export default Main