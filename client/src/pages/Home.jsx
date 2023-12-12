import React, { useEffect, useState } from 'react'
import {NavBar, Main, Submit, Track, LoginHod,
        LoginStaff, SignupHod, SignupStaff, WelcomeHod, WelcomeStaff, Faqs, Feedback
} from '../components'
import { useSelectedNav } from '../hooks/useSelectedNav';


const Home = () => {
  const [selectedNav, toggleSelectedNav] = useSelectedNav('Home');

  useEffect(()=>{
    toggleSelectedNav('Home');
  },[])


  return (
    <>
      <NavBar />
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
    </>
  )
}

export default Home