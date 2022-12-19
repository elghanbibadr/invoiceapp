import React from 'react'
import './filterInvoicesCheckBoxes.css'
const FilterInvoiceSelectOption = (props) => {

    if (props.isVisible){
        return (
      <ul class="selectChoiceList absolute top-16   bg-paleBlue p-5 rounded-lg">
        <li><input type="checkbox" /><span className='text-white font-semibold p-3'>Paid</span> </li>
        <li><input type="checkbox" /><span className='text-white font-semibold p-3'>Draft</span> </li>
        <li><input type="checkbox" /><span className='text-white font-semibold p-3'>Pending</span> </li>
      </ul>
        )
    }
}

export default FilterInvoiceSelectOption