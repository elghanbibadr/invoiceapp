import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Store/AppContext'
const InvoiceDetails = () => {
  const  {clickedInvoice,setClickedInvoice}=useContext(AppContext);
 
  return (
    <div>InvoiceDetails</div>
  )
}

export default InvoiceDetails