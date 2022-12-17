import React, { useState } from 'react'
import Navbar from './componenet/Navbar/Navbar'
 import { AppContextProvider } from './componenet/Store/AppContext'
const App = () => {
  return(
    <AppContextProvider>
      <Navbar/>
    </AppContextProvider>
  )
}

export default App