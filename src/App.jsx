import React, { useState } from 'react'
import Navbar from './componenet/Navbar/Navbar'
import { appContext } from './componenet/Store/appContext'
const App = () => {
  const [them,setThem]=useState('dark')
  console.log(them)
  return (
    <appContext.Provider value={{them,setThem}}>
      <Navbar/>
    </appContext.Provider>
  )
}

export default App