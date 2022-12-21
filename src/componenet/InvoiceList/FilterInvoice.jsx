import React, { useContext } from 'react'
import InvoiceDetails from '../invoiceDetail/InvoiceDetails'
import { AppContext } from '../Store/AppContext'
import FilterInvoiceHeader from './FilterInvoiceHeader'
import InvoiceList from './InvoiceList'
const FilterInvoice = () => {
  const {clickedInvoice,setClickedInvoice}=useContext(AppContext);
  return (
   <div className="mycontainer">
    <FilterInvoiceHeader/>
    <InvoiceList/>
    <InvoiceDetails /> 
    </div>
    
  )
}

export default FilterInvoice