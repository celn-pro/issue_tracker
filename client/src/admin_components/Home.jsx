import React from 'react'
import { useAtom } from 'jotai'

import { userDataAtom } from '../components/LoginHod'

import {Stats, Profile, Aunthenticate, Delegate, Logout, Settings, Dark, Workboard} from './components/index'


import {useSelectedAdminSideBar} from '../hooks/useSelectedAdminSideBar'

const Home = () => {
	const userData =  useAtom(userDataAtom)[0]
	const selectedAdminSideBar = useSelectedAdminSideBar()[0]
  return (
	<>
		{selectedAdminSideBar == 'Stats'&& <Stats userData={userData} />}
		{selectedAdminSideBar == 'Profile' && <Profile userData={userData} />}
		{selectedAdminSideBar == 'Delegate'&& <Delegate userData={userData}/>}
		{selectedAdminSideBar == 'WorkBoard' && <Workboard userData={userData} />}
		{selectedAdminSideBar == 'Aunthenticate'&& <Aunthenticate userData={userData}/>}
		{selectedAdminSideBar == 'Logout'&& <Logout userData={userData}/>}
		{selectedAdminSideBar == 'Settings' && <Settings userData={userData}/>}
		{selectedAdminSideBar == 'Dark' && <Dark userData={userData}/>}

	</>
  )
}

export default Home