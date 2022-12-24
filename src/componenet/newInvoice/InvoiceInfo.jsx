import React, { useContext } from 'react'
import { AppContext } from '../Store/AppContext'
import InvoiceInfoInputWrraper from './InvoiceInfoInputWrraper'
import './invoiceInfo.css'
import ItemInfos from './ItemInfos'
const InvoiceInfo = () => {
  const {setInvoiceInfoMenuVisible}=useContext(AppContext);
  const handleOverlay2Clicked=(e)=>{
    if (e.target.id==='overlay2'){
      setInvoiceInfoMenuVisible(false);
    }
  }

  const handleOnBackClick=(e)=>{
    setInvoiceInfoMenuVisible(false);

  }
  return (
    
    <div id='overlay2' onClick={handleOverlay2Clicked} className="overlay2">
        <div className='absolute py-6 px-2 invoiceInfo top-20 text-white bg-darkBlue left-0 bottom-0 right-0   md:relative  h-full '>
        <div className='flex items-center md:hidden'>
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd" /></svg>
        <a className='text-white cursor-pointer font-bold ml-3' onClick={handleOnBackClick}>Go Back</a>
      </div>
        <h2 className='text-2xl my-6 font-bold'>New Invoice</h2>

        <div className='p-4'>
        <p className='text-paleCyan mb-4 font-bold'>Bill From</p>
          <InvoiceInfoInputWrraper id='input-streetAdress' type='text' label='Street Adress' />
          <InvoiceInfoInputWrraper id='input-country' type='text' label='Country' />
          <InvoiceInfoInputWrraper id='input-city' type='text' label='City' />
          <InvoiceInfoInputWrraper id='input-postCode' type='text' label='Post Code' />
          <p className='text-paleCyan font-bold mb-3'>Bill To</p>
          <InvoiceInfoInputWrraper id='input-clientName' type='text' label='Client Name' />
          <InvoiceInfoInputWrraper id='input-clientEmail' type='email' label='Client Email' />
          <InvoiceInfoInputWrraper id='input-clientStreetAdress' type='text' label='Street Adress' />
          <InvoiceInfoInputWrraper id='input-clientCountry' type='text' label='Country' />
          <InvoiceInfoInputWrraper id='input-clientCity' type='text' label='City' />
          <InvoiceInfoInputWrraper id='input-invoiceDate' type='date' label='Invoice Date' />
          <InvoiceInfoInputWrraper id='input-select'  label='Payment Terms' />
          <InvoiceInfoInputWrraper id='input-projectDesc' type='text' label='Project Description' />
          <h2 className='text-paleCyan font-bold mb-4'>Item List</h2>
          <InvoiceInfoInputWrraper id='input-ItemName' type='text' label='Item Name' />
          <ItemInfos />
       
        </div>

        </div>

    </div>
  )
}

export default InvoiceInfo


