import React from 'react'

const InvoiceItem = (props) => {
  return (
    <div className=' text-white  grid grid-cols-4  my-4'>
     <h3 className='text-sm font-semibold'>{props.name}</h3>
     <h3 className='text-sm font-semibold ml-2'>{props.quantity}</h3>
     <h3 className='text-sm font-semibold'>${props.price}</h3>
     <h3 className='text-sm font-semibold'>${props.total}</h3>
    </div>
  )
}

export default InvoiceItem