import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Store/AppContext'
import InvoiceDetailsMain from './InvoiceDetailsMain';
import InvoiceDetailsHeader from './InvoiceDetailsHeader';
const InvoiceDetails = () => {
  const  {clickedInvoice,setClickedInvoice}=useContext(AppContext);
  const handleOnBackClick=()=>setClickedInvoice(null);
  return (
    <>
    <a className='text-white' onClick={handleOnBackClick}>Go Back</a>
    <InvoiceDetailsHeader/>
    <InvoiceDetailsMain/>
    </>
  )
}

export default InvoiceDetails