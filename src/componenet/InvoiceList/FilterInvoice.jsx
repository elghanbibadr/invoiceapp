import React, { useContext } from 'react'
import InvoiceDetails from '../invoiceDetail/InvoiceDetails'
import { AppContext } from '../Store/AppContext'
import FilterInvoiceHeader from './FilterInvoiceHeader'
import InvoiceList from './InvoiceList'
const FilterInvoice = () => {
  const {clickedInvoice,setClickedInvoice}=useContext(AppContext);
  return (
   <div className="mycontainer">
    {/* <FilterInvoiceHeader/> */}
    {clickedInvoice===null ? [<FilterInvoiceHeader/>,<InvoiceList/>] :  <InvoiceDetails /> }
    {/* <InvoiceList/> */}
   
    </div>
    
  )
}

export default FilterInvoice