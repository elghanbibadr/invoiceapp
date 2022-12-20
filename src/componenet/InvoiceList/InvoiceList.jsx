import React from 'react'
import Invoice from './Invoice'
import { data } from '../../data'

const InvoiceList = () => {
  return (
    <div className='invoiceList'>
        {data.map(({id,total,paymentDue,clientName,status},index)=>{
          return(
            <Invoice key={index}  id={id} paymentDue={paymentDue} clientName={clientName} total={total} status={status} />
          )
        })}
    </div>
  )
}

export default InvoiceList