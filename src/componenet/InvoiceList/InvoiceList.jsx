import React from 'react'
import Invoice from './Invoice'
import { data } from '../../data'
import { generateColorForStatusIcon,generateColorForStatusText } from '../GlobalComponenet/helper'

const InvoiceList = () => {
  return (
    <div className='invoiceList'>
        {data.map(({id,total,paymentDue,clientName,status},index)=>{
          return(
            <Invoice  key={index}  id={id} paymentDue={paymentDue} clientName={clientName} total={total} statusValues={{name:status,bg:generateColorForStatusText(status),iconFill:generateColorForStatusIcon(status)}} />
          )
        })}
    </div>
  )
}

export default InvoiceList