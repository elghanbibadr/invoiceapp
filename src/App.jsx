import React, { useState } from 'react'
import Navbar from './componenet/Navbar/Navbar'
import FilterInvoice from './componenet/InvoiceList/FilterInvoice'
 import { AppContextProvider } from './componenet/Store/AppContext'
const App = () => {
  return(
    <AppContextProvider>
      <Navbar/>
      <FilterInvoice/>
    </AppContextProvider>
  )
}

export default App