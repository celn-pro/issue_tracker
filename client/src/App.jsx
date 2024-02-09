import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Faqs from './pages/Faqs'
import { SelectedNavProvider } from './contexts/SelectNavContext'
import { PrevSelectedNavProvider } from './contexts/PrevSelectedNavContext'
import {DarkThemeProvider} from './contexts/DarkThemeContext'


function App() {

  return (
   <DarkThemeProvider>
      <PrevSelectedNavProvider>
        <SelectedNavProvider>
          <Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='faqs' element={<Faqs />} />
			</Routes>
		  </Router>
        </SelectedNavProvider>
      </PrevSelectedNavProvider>
    </DarkThemeProvider>
  )
}

export default App
