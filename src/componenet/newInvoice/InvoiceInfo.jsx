import React, { useContext, useState } from 'react'
import { AppContext } from '../Store/AppContext'
import InvoiceInfoInputWrraper from './InvoiceInfoInputWrraper'
import { formData } from './FormInputData'
import './invoiceInfo.css'
import ItemInfos from './ItemInfos'
import Button from '../GlobalComponenet/Button'
import InvoiceInfoFooter from './InvoiceInfoFooter'
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

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    let formData=new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()))
  }


  return (
    
    <div id='overlay2' onClick={handleOverlay2Clicked} className="overlay2">
        <div className='absolute py-6 px-2 invoiceInfo top-20 text-white bg-darkBlue left-0 bottom-0 right-0   md:relative  h-full '>
        <div className='flex items-center md:hidden'>
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fill-rule="evenodd" /></svg>
        <a className='text-white cursor-pointer font-bold ml-3' onClick={handleOnBackClick}>Go Back</a>
      </div>
        <h2 className='text-2xl my-6 font-bold'>New Invoice</h2>

        <form onSubmit={handleFormSubmit} className='p-4'>
        <p className='text-paleCyan mb-4 font-bold'>Bill From</p>
           {formData.map(({id,type,label,name},index)=>{
            return <InvoiceInfoInputWrraper   id={id} i={index} name={name} type={type}  label={label}   />
           })}
          <ItemInfos />
          <Button name=' Add New Item' bg='bg-paleBlue flex justify-center w-3/4 m-8 ' />
          <InvoiceInfoFooter />
        </form>

        </div>

    </div>
  )
}

export default InvoiceInfo


