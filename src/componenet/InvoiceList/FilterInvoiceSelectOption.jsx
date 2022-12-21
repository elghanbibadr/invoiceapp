import React, { useContext} from 'react'
import './filterInvoicesCheckBoxes.css'
import { AppContext } from '../Store/AppContext';

const FilterInvoiceSelectOption = (props) => {
  const {checkedBoxes,setCheckedBoxes}=useContext(AppContext);


  const handleCheckBoxInputClicked=(e)=>{
   
   if(e.target.checked){
    setCheckedBoxes(prv=>[...prv,e.target.value])

    
   }else{
    checkedBoxes.splice(checkedBoxes.indexOf(e.target.value), 1)
    setCheckedBoxes(prv=>[...prv])
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