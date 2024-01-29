import React, { useState } from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav'
import { usePrevSelectedNav } from '../hooks/usePrevSelectedNav'
import Footer from './Footer'

import { sectionInfo } from '../constants'

const Main = () => {
    const [showParagraph, setShowParagraph] =useState(false)
    const [selectedNav, toggleSelectedNav] = useSelectedNav();
    const [prevSelectedNav, togglePrevSelectedNav] = usePrevSelectedNav()

  return (
	<div className='h-[100vh] ml-[300px]'>
	  <div className='border-[1px] border-black mr-[50px] top-[130px] bottom-[50px] absolute rounded overflow-auto px-[20px]'>
        <div className=' mt-[10px] relative flex justify-center items-center mb-[30px]'>
            <div className=''>
				<div className='mb-[10px]'>
					  <input type="search" name="" id="" placeholder='Track...' className='w-full h-[40px] mt-[10px] font-medium px-[5px] py-[5px] rounded border-[1px] border-black focus:outline-none' />
				</div>
				<div className='flex justify-center items-center'>
					  <h1 className='mb-[10px] text-[28px] font-system font-bold px-[20px] text-center'>DAR ES SALAAM INSTITUTE OF TECHNOLOGY</h1>
				</div>
				<div className='flex justify-center items-center'>
					  <p className='font-bold'>SUBMIT/TRACK CHALLENGES</p>
				</div>
            </div>
        </div>
        <div className='flex justify-start items-centermb-[15px] font-bold'>
			  <div className='relative border-[1px] border-black rounded px-[20px] py-4 text-[12px]'>
                {showParagraph?(
                    <p className=''
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
                    <p className='cursor-pointer'
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

        <div className='mb-[10px]'>
            <div className='flex flex-col justify-center items-center gap-5 mt-[20px]'>
             {sectionInfo.map((s,i) => {
				if(s.name == 'Track' || s.name=='Submit'){
					return <button className={` ${s.name == 'Submit' ? 'bg-white text-black border-black border-[1px]' :'bg-black text-white'} rounded w-full h-[50px] max-[1000px]:w-full w-[400px] font-medium px-[5px] py-[5px] `}
						onClick={() => {
						togglePrevSelectedNav(selectedNav)
						toggleSelectedNav(s.name)
						}}
					>{s.message}</button>
				}
			 })}
            </div>
        </div>
		<div className='italic h-[80px] text-black font-bold mt-[30px] rounded'>
			 <div>
				<div>Concieved by: Msigwa G</div>
			 	<div>Developed by: odd22</div>
			 </div>
		</div>
		{/* <Footer /> */}
    </div>
	  </div>
  )
}

export default Main