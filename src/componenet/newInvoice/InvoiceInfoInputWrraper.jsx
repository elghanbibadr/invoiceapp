import React from 'react'

const InvoiceInfoInputWrraper = (props) => {
    if (props.id==='input-select'){
        return(
            <div className='InvoiceInfoInputWrraper '>
    <label  htmlFor={props.id} >{props.label}</label>
    <select className='p-3 my-4 w-full font-bold  bg-paleBlue' id={props.id} type={props.type} >
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
          <label  htmlFor={props.id} >{props.label}</label>
          <input className='p-3 my-4 w-full  bg-paleBlue' id={props.id} type={props.type} /> 
          </div>
        )
    }
}

export default InvoiceInfoInputWrraper