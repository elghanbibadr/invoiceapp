import React from 'react'
import './filterInvoicesCheckBoxes.css'
const FilterInvoiceSelectOption = () => {
  return (

<ul class="selectChoiceList bg-paleBlue p-6">
  <li><input type="checkbox" /><span className='text-white font-semibold p-3'>Paid</span> </li>
  <li><input type="checkbox" /><span className='text-white font-semibold p-3'>Draft</span> </li>
  <li><input type="checkbox" /><span className='text-white font-semibold p-3'>Pending</span> </li>
</ul>
    
  )
}

export default FilterInvoiceSelectOption