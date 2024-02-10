import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Faqs from './pages/Faqs'
import { SelectedNavProvider } from './contexts/SelectNavContext'
import { PrevSelectedNavProvider } from './contexts/PrevSelectedNavContext'
import {DarkThemeProvider} from './contexts/DarkThemeContext'
import AdminDashboard from './admin_components/HodAccount'
import StaffDashboard from './staff_components/StaffAccount'


function App() {

  return (
   <DarkThemeProvider>
      <PrevSelectedNavProvider>
        <SelectedNavProvider>
          <Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='faqs' element={<Faqs />} />
				<Route path='hod_dashboard' element={<AdminDashboard />}/>
				<Route path='staff_dashboard' element={<StaffDashboard />}/>
			</Routes>
		  </Router>
        </SelectedNavProvider>
      </PrevSelectedNavProvider>
    </DarkThemeProvider>
  )
}

export default App
