import React ,{useContext, useState} from 'react'
import { AppContext } from '../Store/AppContext'
import iconArrow from '../../assets/icon-arrow-down.svg'
import FilterInvoiceSelectOption from './FilterInvoiceSelectOption'
import Button from '../GlobalComponenet/Button'
const FilterInvoiceHeader = () => {
    const {invoiceNumber}=useContext(AppContext);
    const [arrowRotated,setArrowRotated]=useState(false);
    const [isChoicesListVisible,setIsChoicesListVisible]=useState(false)
    const handleFilterArrowClicked=()=>{
        setArrowRotated(!arrowRotated);
        setIsChoicesListVisible(!isChoicesListVisible)
    }

 return(
<div className='filterInvoiceBox flex justify-between'>
     <div className="filterInvoicesDesc">
         <h1>Invoices</h1>
         <p>  {invoiceNumber}   invoice</p>
     </div>
     <div className="filerInvoiceChange">
        <div className="filterInvoiceLabel flex items-center">
            <p>filter</p>
            <img  onClick={handleFilterArrowClicked} className={`iconArrow ml-2 ${arrowRotated ? 'rotate-180' : 'rotate-0'}`} src={iconArrow}/>
        </div>
       <FilterInvoiceSelectOption isVisible={isChoicesListVisible}/>
       <Button btnWithIcon={true} id='bg-cyan' name='New Invoice'/>
    </div>
    </div>
 )
}

export default FilterInvoiceHeader

