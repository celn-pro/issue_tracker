import { useState } from 'react'
import Home from './pages/Home'
import { SelectedNavProvider } from './contexts/SelectNavContext'
import { PrevSelectedNavProvider } from './contexts/PrevSelectedNavContext'
import {DarkThemeProvider} from './contexts/DarkThemeContext'


function App() {

  return (
   <DarkThemeProvider>
      <PrevSelectedNavProvider>
        <SelectedNavProvider>
          <Home />
        </SelectedNavProvider>
      </PrevSelectedNavProvider>
    </DarkThemeProvider>
  )
}

export default App
