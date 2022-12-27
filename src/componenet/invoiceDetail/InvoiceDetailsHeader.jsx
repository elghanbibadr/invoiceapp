import React, { useContext, useState } from 'react'
import Button from '../GlobalComponenet/Button';
import { AppContext } from '../Store/AppContext'
import { generateColorForStatusIcon ,generateColorForStatusText } from '../GlobalComponenet/helper';

const InvoiceDetailsHeader = () => {
  const {clickedInvoice,filteredinvoicesList,setEditBtnToggled}=useContext(AppContext);
  const currentInvoiceDetails=filteredinvoicesList.find(invoice=> invoice.id===clickedInvoice[0])
  const [currentInvoiceStatus,setCurrentStatus]=useState(currentInvoiceDetails.status)
    
    const handleButtonClick=(e)=>{
      if(e.target.id==='markAsPaidBtn'){
        setCurrentStatus('paid')
        currentInvoiceDetails.status="paid"
      }
      if (e.target.id==='deleteBtn'){
        setEditBtnToggled(true)
      }
    }
    
  return (
    <>
    <div className='bg-paleBlue flex justify-between items-center p-4 rounded-md m-4' >
       <div className='flex items-center'>
        <p className='mr-4 font-semibold'>Status</p>
        <div className='invoice__status  w-fit p-1 flex items-center  justify-self-end  '>
                <svg fill={generateColorForStatusIcon(currentInvoiceStatus)}  className='invoice__status-cirlce  h-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path  d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
                </svg>
                <span className={`${generateColorForStatusText(currentInvoiceStatus)} font-bold ml-2`}>{currentInvoiceDetails.status}</span>
            </div>
       </div>
       <div onClick={handleButtonClick} className='flex justify-between '>
        <Button id='deleteBtn' name='Delete' bg='bg-paleRed' />
        {currentInvoiceStatus==="pending" && <Button id='markAsPaidBtn' name='Mark as paid 'bg='bg-paleCyan'/>}
       </div>
    </div>
    </>
  )
}

export default InvoiceDetailsHeader