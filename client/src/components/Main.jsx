import React, { useState } from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav'
import { usePrevSelectedNav } from '../hooks/usePrevSelectedNav'

const Main = () => {
    const [showParagraph, setShowParagraph] =useState(false)
    const [selectedNav, toggleSelectedNav] = useSelectedNav();
    const [prevSelectedNav, togglePrevSelectedNav] = usePrevSelectedNav()
  return (
    <div>
        <div className=' mt-[30px] relative px-[20px] flex justify-center items-center mb-[30px]'>
            <div>
            <h1 className='mb-[10px] font-system font-bold'>DAR ES SALAAM INSTITUTE OF TECHNOLOGY</h1>
            <p className='pl-[20%] font-mono font-bold'>SUBMIT/TRACK CHALLENGES</p>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <div className='w-[70%] relative md:h-full'>
                {showParagraph?(
                    <p className='transition-all duration-300 font-system border-[1px] rounded px-6 py-4'
                    >
                        Welcome to DIT report program, your one-stop solution for submitting and tracking the
                        progress of your issues. With our user-friendly interface you can effortlessly report
                        problems concerning academic results, registration problems, soma website not working/responding
                        and many more, to make it more smoother remember you can always hover over the question mark icon 
                        located on the right of each field. These hints will provide valuable information and guadance
                        ensuring that you have seamless and effient experience while using the platform. Your feedback 
                        is crucial and we are here to make sure your concerns are addressed swiftly and complehensively. 
                        <span className='hover:text-gray-400 cursor-pointer text-gray-300 pl-[20px]'
                      onClick={()=> setShowParagraph(!showParagraph)}
                      > read less</span>
                    </p>
                ):( 
                    <p className='cursor-pointer font-verdan border-[1px] rounded px-6 py-4'
                >
                    Welcome to DIT report program, your one-stop solution for submitting and tracking the
                    progress of your issues. With our user-friendly interface you.... <span className='hover:text-gray-400 text-gray-300'
                      onClick={()=> setShowParagraph(!showParagraph)}
                    >read more</span>
                </p>
                )}
            </div>
        </div>

        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-5 mt-[20px]'>
               <button className='rounded bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]'
                 onClick={()=>{
                    togglePrevSelectedNav(selectedNav)
                    toggleSelectedNav('Submit')
                 }}
               >Submit</button>
               <button className='rounded bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]'
                 onClick={()=>{
                    togglePrevSelectedNav(selectedNav)
                    toggleSelectedNav('Track')
                 }}
               >Track</button>
            </div>
        </div>

        <div>
            <div className='px-[20px] mt-[8%]'>
            <h2 className='mb-[10px] font-cursive font-bold'>QUICK LINKS:</h2>
                <ul>
                    <li className='underline font-bold font-cursive hover:text-gray-500 cursor-pointer'
                      onClick={()=>{
                        togglePrevSelectedNav(selectedNav)
                        toggleSelectedNav('WelcomeHod')
                      }}
                    >Head of Department (HOD)</li>
                    <li className='underline font-bold font-cursive hover:text-gray-500 cursor-pointer'
                      onClick={()=>{
                        togglePrevSelectedNav(selectedNav)
                        toggleSelectedNav('WelcomeStaff')
                      }}
                    >Staff</li>
                    <li className='underline font-bold font-cursive hover:text-gray-500 cursor-pointer'
                      onClick={()=>{
                        togglePrevSelectedNav(selectedNav)
                        toggleSelectedNav('FAQs')
                      }}
                    >FAQ's</li>
                    <li className='underline font-bold font-cursive hover:text-gray-500 cursor-pointer'
                      onClick={()=>{
                        togglePrevSelectedNav(selectedNav)
                        toggleSelectedNav('Feedback')
                      }}
                    >Feedback</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Main