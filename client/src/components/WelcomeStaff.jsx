import React from 'react'
import { useSelectedNav } from '../hooks/useSelectedNav'
import { usePrevSelectedNav } from '../hooks/usePrevSelectedNav';
const WelcomeStaff = () => {
  const [selectedNav, toggleSelectedNav] = useSelectedNav();
  const [prevSelectedNav, togglePrevSelectedNav ] = usePrevSelectedNav();

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-[70%] relative mt-[5%]'>
          <p className='border-[1px] py-[10px] px-[10px] rounded'>
            Welcome Staff we are really honored to have you here,
            we are looking forwarding to collaborating with you and make sure that all
            the submitted challenges are resolved. we appriciete you taking your time
            joining with us.
          </p>
        </div>
      </div>

        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-5 mt-[20px]'>
               <button className='rounded bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]'
                 onClick={()=>{
                    togglePrevSelectedNav(selectedNav)
                    toggleSelectedNav('SignupStaff')
                 }}
               >Signup</button>
               <button className='rounded bg-green-700 text-white w-[70px] md:w-[100px] hover:bg-green-600 font-medium px-[5px] py-[5px]'
                 onClick={()=>{
                    togglePrevSelectedNav(selectedNav)
                    toggleSelectedNav('LoginStaff')
                 }}
               >Login</button>
            </div>
        </div>

        <div>
            <div className='px-[20px] mt-[8%]'>
            <h2 className='mb-[10px] font-cursive font-bold'>QUICK LINKS:</h2>
                <ul>
                    <li className={`underline font-bold font-cursive hover:text-gray-500 cursor-pointer`}
                      onClick={()=>{
                        togglePrevSelectedNav(selectedNav)
                        toggleSelectedNav('WelcomeHod')
                      }}
                    >Head of Department (HOD)</li>
                    <li className={`${selectedNav=='WelcomeStaff'?'hidden':'block'} underline font-bold font-cursive hover:text-gray-500 cursor-pointer`}
                      onClick={()=>{
                        togglePrevSelectedNav(selectedNav)
                        toggleSelectedNav('WelcomeStaff')
                      }}
                    >Staff</li>
                    <li className={`${selectedNav=='WelcomeHod'?'hidden':'block'} underline font-bold font-cursive hover:text-gray-500 cursor-pointer`}
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

export default WelcomeStaff