import React, { useContext } from 'react'
import InvoiceDetails from '../invoiceDetail/InvoiceDetails'
import InvoiceInfo from '../newInvoice/InvoiceInfo'
import { AppContext } from '../Store/AppContext'
import FilterInvoiceHeader from './FilterInvoiceHeader'
import InvoiceList from './InvoiceList'
const FilterInvoice = () => {
  const {clickedInvoice,invoiceInfoMenuVisible,setClickedInvoice}=useContext(AppContext);
  return (
   <div className="mycontainer">
    {clickedInvoice===null ? [<FilterInvoiceHeader/>,<InvoiceList/>] :  <InvoiceDetails /> }
    {invoiceInfoMenuVisible &&  <InvoiceInfo/>}
    </div>
    
  )
}

export default FilterInvoice