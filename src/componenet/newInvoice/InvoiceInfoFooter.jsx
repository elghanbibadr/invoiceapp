import React, { useContext } from 'react'
import Button from '../GlobalComponenet/Button'
import { AppContext } from '../Store/AppContext'

const InvoiceInfoFooter = () => {
  const {setInvoiceInfoMenuVisible}=useContext(AppContext)
  const handleInvoiceInfoBtnsClicked=(e)=>{
    if(e.target.id==='btn-discard'){
      setInvoiceInfoMenuVisible(false);
    }
  }
    
  return (
    <div onClick={handleInvoiceInfoBtnsClicked} className="invoiceInfo__footer flex justify-evenly">
            <Button id='btn-discard' name='Discard' bg='bg-paleBlue'/>
            <Button name='Save & Send' bg="bg-paleCyan" />
    </div>
  )
}

export default InvoiceInfoFooter