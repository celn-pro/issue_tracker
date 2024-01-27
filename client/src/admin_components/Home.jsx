import React from 'react'
import {Stats, Profile, Aunthenticate, Delegate, Logout, Settings, Dark, Workboard} from './components/index'


import { useSelectedAdminSideBar } from '../hooks/useSelectedAdminSideBar'

const Home = () => {
	const [selectedAdminSideBar, toggleSelectedAdminSideBar] = useSelectedAdminSideBar()
  return (
	<>
		{selectedAdminSideBar == 'Stats'&& <Stats />}
		{selectedAdminSideBar == 'Profile' && <Profile />}
		{selectedAdminSideBar == 'Delegate'&& <Delegate />}
		{selectedAdminSideBar == 'WorkBoard' && <Workboard />}
		{selectedAdminSideBar == 'Aunthenticate'&& <Aunthenticate />}
		{selectedAdminSideBar == 'Logout'&& <Logout />}
		{selectedAdminSideBar == 'Settings' && <Settings />}
		{selectedAdminSideBar == 'Dark' && <Dark />}

	</>
  )
}

export default Home