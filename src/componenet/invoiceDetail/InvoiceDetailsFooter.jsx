import React from 'react'
import InvoiceItem from './InvoiceItem'

const InvoiceDetailsFooter = (props) => {
  return (
    <div className=' invoiceDetailsFooter   col-span-2  rounded-sm m-0 bg-paleCyan'>
        <div className=' visible grid grid-cols-4 p-6  opacity-100 invoiceDetailsFooter-header'>
            <p>Item Name</p>
            <p>QTY.</p>
            <p>Price</p>
            <p>Total</p>
        </div> 
      {props.items.map(({name,quantity,price,total},index)=>{
       return  <InvoiceItem key={index} name={name} quantity={quantity} price={price} total={total} />
      })}
      <div className='bg-darkBlue flex justify-between items-center p-4 mt-8  h-20 ' >
       <p>Amount Due</p>
       <h2 className='font-bold'>${props.total}</h2>
      </div>
    </div>
  )
}

export default InvoiceDetailsFooter