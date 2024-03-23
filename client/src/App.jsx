import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import { SelectedNavProvider } from './contexts/SelectNavContext'
import { PrevSelectedNavProvider } from './contexts/PrevSelectedNavContext'
import {DarkThemeProvider} from './contexts/DarkThemeContext'
import AdminDashboard from './admin_components/HodAccount'
import StaffDashboard from './staff_components/StaffAccount'
import SystemAdmin from './pages/SystemAdmin'

function App() {

  return (
   <DarkThemeProvider>
      <PrevSelectedNavProvider>
        <SelectedNavProvider>
          <Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/admin' element={<SystemAdmin />} />
				<Route path='/hod_dashboard' element={<AdminDashboard />}/>
				<Route path='/staff_dashboard' element={<StaffDashboard />}/>
			</Routes>
		  </Router>
        </SelectedNavProvider>
      </PrevSelectedNavProvider>
    </DarkThemeProvider>
  )
}

export default App
