import React, { useContext, useState } from 'react'
import './filterInvoicesCheckBoxes.css'
import { AppContext } from '../Store/AppContext';
import { data } from '../../data';

const FilterInvoiceSelectOption = (props) => {
  const {checkedBoxes,setCheckedBoxes}=useContext(AppContext);
  const {setInvoicesFilteredList}=useContext(AppContext);

  const handleCheckBoxInputClicked=(e)=>{
   if(e.target.checked){
    setCheckedBoxes(prv=>[...prv,e.target.value])
  
    
   }else{
    checkedBoxes.splice(checkedBoxes.indexOf(e.target.value), 1)
    setCheckedBoxes(prv=>[...prv])
   }
   const filtered= data.filter(invoiceItem=>checkedBoxes.includes(invoiceItem.status))
   if (!checkedBoxes.length===0) {
     setInvoicesFilteredList(filtered)
   }
  }

    if (props.isVisible){
        return (
      <ul class="selectChoiceList absolute top-16 z-50   bg-paleBlue p-5 rounded-lg">
        <li><input onChange={handleCheckBoxInputClicked} type="checkbox" value='paid' /><span className='text-white font-semibold p-3'>paid</span> </li>
        <li><input onChange={handleCheckBoxInputClicked} type="checkbox" value='draft' /><span className='text-white font-semibold p-3'>draft</span> </li>
        <li><input onChange={handleCheckBoxInputClicked} type="checkbox" value='pending' /><span className='text-white font-semibold p-3'>pending</span> </li>
      </ul>
        )
    }
}

export default FilterInvoiceSelectOption