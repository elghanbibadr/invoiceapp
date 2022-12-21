import React ,{useContext, useEffect} from 'react'
import Invoice from './Invoice'
import { data } from '../../data'
import { generateColorForStatusIcon,generateColorForStatusText } from '../GlobalComponenet/helper'
 import { AppContext } from '../Store/AppContext'

const InvoiceList = () => {
   const {filteredinvoicesList,setInvoicesFilteredList}=useContext(AppContext)
   const {checkedBoxes}=useContext(AppContext)

   useEffect(()=>{
     setInvoicesFilteredList(data.filter(invoiceItem=>checkedBoxes.includes(invoiceItem.status)))
     if (filteredinvoicesList.length===0 || checkedBoxes.length===0){
      setInvoicesFilteredList(data);
     }
   },[checkedBoxes]);

  
  
   

  return (
    <div className='invoiceList'>
        {filteredinvoicesList.map(({id,total,paymentDue,clientName,status},index)=>{
          return(
            <Invoice  key={index}  id={id} paymentDue={paymentDue} clientName={clientName} total={total} statusValues={{name:status,bg:generateColorForStatusText(status),iconFill:generateColorForStatusIcon(status)}} />
          )
        })}
    </div>
  )
}

export default InvoiceList