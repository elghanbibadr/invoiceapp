import React, { useState } from 'react'

const InvoiceInfoInputWrraper = ({id,label,name,type,handleChange}) => {
   


    if (id==='billTo'){
        return  <p className='text-paleCyan mb-4 font-bold'>Bill To</p>

    }
    if (id==='input-select'){
        return(
            <div className='InvoiceInfoInputWrraper '>
    <label  htmlFor={id} >{label}</label>
    <select className='p-3 my-4 w-full font-bold  bg-paleBlue'  name={name} onChange={handleChange} id={id} type={type}  >
        <option className='font-bold'>Net 1 day</option>
        <option className='font-bold'>Net 7 day</option>
        <option className='font-bold '>Net 14 day</option>
        <option className='font-bold'>Net 30 day</option>
    </select>
    </div>
        )
    }else{
        return (
          <div className='InvoiceInfoInputWrraper '>
          <label  htmlFor={id} >{label}</label>
          <input className='p-3 my-4 w-full  bg-paleBlue' id={id} type={type} name={name}  onChange={handleChange} /> 
          </div>
        )
    }
}

export default InvoiceInfoInputWrraper