import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Store/AppContext'
import InvoiceDetailsMain from './InvoiceDetailsMain';
import InvoiceDetailsHeader from './InvoiceDetailsHeader';
import Modal from '../../componenet/invoiceDetail/Modal';
const InvoiceDetails = () => {
 const  {clickedInvoice,setClickedInvoice,editbtntoggled}=useContext(AppContext);
  const handleOnBackClick=()=>setClickedInvoice(null);
  return (
    <div className='container'>
    <div className='flex items-center'> 
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
      <a className='text-white cursor-pointer font-bold ml-3' onClick={handleOnBackClick}>Go Back</a>
      </div>
    <InvoiceDetailsHeader/>
    <InvoiceDetailsMain/>
     {editbtntoggled && <Modal/>}
    </div>
  )
}

export default InvoiceDetails