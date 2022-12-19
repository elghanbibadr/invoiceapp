import React, { useContext } from 'react'
import { AppContext } from '../Store/AppContext'
import FilterInvoiceSelectOption from './FilterInvoiceSelectOption'
import iconArrow from '../../assets/icon-arrow-down.svg'
const FilterInvoice = () => {
    const {invoiceNumber}=useContext(AppContext);
    console.log(invoiceNumber)
  return (
    <div className='filterInvoiceBox flex justify-between'>
     <div className="filterInvoicesDesc">
         <h1>Invoices</h1>
         <p>  {invoiceNumber}   invoice</p>
     </div>
     <div className="filerInvoiceChange">
        <div className="filterInvoiceLabel flex items-center">
            <p>filter</p>
            <img  className='iconArrow ' src={iconArrow}/>
        </div>
       <FilterInvoiceSelectOption/>
    </div>
    </div>
    
  )
}

export default FilterInvoice