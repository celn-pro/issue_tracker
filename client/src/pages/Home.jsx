import React, {useEffect} from 'react'
import {NavBar, Main, Submit, Track, LoginHod,
        LoginStaff, SignupHod, SignupStaff, WelcomeHod, 
		WelcomeStaff, Faqs, Feedback,SideBar, Analytics, Congrats
} from '../components'

import AdminDashboard from '../admin_components/HodAccount';
import {useSelectedNav} from '../hooks/useSelectedNav';


const Home = () => {
  const [selectedNav, toggleSelectedNav] = useSelectedNav('Home');

  useEffect(()=>{
    toggleSelectedNav('Home');
  },[])


  return (
    <>
      <NavBar />
	  <SideBar />
      {selectedNav == 'Home'&&<Main />}
      {selectedNav == 'Submit'&&<Submit />}
      {selectedNav == 'Track'&&<Track />}
      {selectedNav == 'FAQs'&&<Faqs />}
      {selectedNav == 'Feedback'&&<Feedback />}
      {selectedNav == 'LoginHod'&&<LoginHod />}
      {selectedNav == 'LoginStaff'&&<LoginStaff />}
      {selectedNav == 'SignupHod'&&<SignupHod />}
      {selectedNav == 'SignupStaff'&&<SignupStaff />}
      {selectedNav == 'WelcomeHod'&&<WelcomeHod />}
      {selectedNav == 'WelcomeStaff'&&<WelcomeStaff />}
	  {selectedNav == 'Analytics'&&<Analytics />}
	  {selectedNav == 'Congrats'&&<Congrats />}
	  {selectedNav == 'Logged'&&<AdminDashboard />}


    </>
  )
}

export default Home