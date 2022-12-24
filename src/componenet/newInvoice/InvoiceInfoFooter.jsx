import React from 'react'
import Button from '../GlobalComponenet/Button'

const InvoiceInfoFooter = () => {
    
  return (
    <div className="invoiceInfo__footer flex justify-evenly">
            <Button name='Discard' bg='bg-paleBlue'/>
            <Button name='Save as Draft' bg="bg-paleBlue" />
            <Button name='Save & Send' bg="bg-paleCyan" />
    </div>
  )
}

export default InvoiceInfoFooter