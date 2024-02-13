import React from 'react'
import {useSelectedNav} from '../hooks/useSelectedNav'
import {usePrevSelectedNav} from '../hooks/usePrevSelectedNav';

import {SELECTED_PAGES} from '../constants';

const WelcomeHod = () => {
  const [selectedNav, toggleSelectedNav] = useSelectedNav();
  const togglePrevSelectedNav = usePrevSelectedNav()[1]

  return (
		<div className='h-[100vh]'>
			<div className=' px-[20px] right-[50px] left-[300px] max-800:left-[50px] top-[130px] bottom-[50px] absolute md:border-[1px] border-black rounded font-bold text-black flex justify-center items-center'>
				<div className='w-[500px] px-[20px] py-[20px] rounded border-[1px] shadow-xl'>
					<div className='flex justify-center items-center'>
						<div className='relative mt-[20px] '>
							<p className='border-[1px] border-black py-[10px] px-[10px] text-[12px] rounded font-verdan'>
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
									return <button className={` ${s.name == 'SignupHod' ? 'bg-white text-black border-2 border-black' : 'bg-black text-white'} rounded w-full font-medium px-[5px] py-[5px] mb-[10px] `}
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
				</div>
			</div>
		</div>
  	)
}

export default WelcomeHod