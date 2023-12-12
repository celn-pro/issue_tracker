import { useState } from 'react'
import Home from './pages/Home'
import { SelectedNavProvider } from './contexts/SelectNavContext'


function App() {

  return (
   <SelectedNavProvider>
      <Home />
   </SelectedNavProvider>
  )
}

export default App
