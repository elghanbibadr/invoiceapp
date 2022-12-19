import React ,{useContext} from 'react'
import { AppContext } from '../Store/AppContext'
import iconArrow from '../../assets/icon-arrow-down.svg'
import FilterInvoiceSelectOption from './FilterInvoiceSelectOption'

const FilterInvoiceHeader = () => {
    const {invoiceNumber}=useContext(AppContext);


 return(
<div className='filterInvoiceBox flex justify-between'>
     <div className="filterInvoicesDesc">
         <h1>Invoices</h1>
         <p>  {invoiceNumber}   invoice</p>
     </div>
     <div className="filerInvoiceChange">
        <div className="filterInvoiceLabel flex items-center">
            <p>filter</p>
            <img  className='iconArrow ml-2 ' src={iconArrow}/>
        </div>
       <FilterInvoiceSelectOption/>
    </div>
    </div>
 )
}

export default FilterInvoiceHeader

