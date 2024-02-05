import React from 'react'
import {useSelectedNav} from '../hooks/useSelectedNav'
import {usePrevSelectedNav} from '../hooks/usePrevSelectedNav'

import {sectionInfo} from '../constants'

const SideBar = () => {
	const [selectedNav, toggleSelectedNav] = useSelectedNav();
	const togglePrevSelectedNav = usePrevSelectedNav()[1]

	return (
		<div className='bg-white w-[300px] h-[100vh] absolute top-0 left-0 px-[50px] py-[50px] font-sans font-bold text-[12px]'>
			<div className='border-[1px] border-black px-[20px] py-[20px] rounded h-full text-black'>
				<div>
					{sectionInfo.map((s) => {
						return <div className={`${selectedNav === s.name ? 'bg-yellow-300 ' : ''} ${((selectedNav == 'LoginStaff'||selectedNav=='SignupStaff') && s.name == 'WelcomeStaff') ?'bg-yellow-300':''}
						${((selectedNav == 'LoginHod' || selectedNav == 'SignupHod') && s.name == 'WelcomeHod') ? 'bg-yellow-300' : ''}
						${((selectedNav == 'Submit' || selectedNav == 'Congrats') && s.name == 'Submit') ? 'bg-yellow-300' : ''}
						flex justify-start items-center gap-5 mb-[10px] cursor-pointer rounded px-[10px]`} onClick={() => {
								togglePrevSelectedNav(selectedNav)
								toggleSelectedNav(s.name)
							}}>{s.icon} <div className='inline-block'>{s.message}</div></div> 
					})}
				</div>
			</div>
		</div>
	)
}

export default SideBar