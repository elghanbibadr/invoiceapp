import React, { useContext }  from 'react'
import Button from '../GlobalComponenet/Button';
import './modal.css'
import { AppContext } from '../Store/AppContext';
const Modal = () => {
  const {setEditBtnToggled,filteredinvoicesList,setClickedInvoice,clickedInvoice}=useContext(AppContext)
  const currentInvoiceDetails=filteredinvoicesList.find(invoice=> invoice.id===clickedInvoice[0])

  const handleModalBtnBoxClicked=(e)=>{
    if (e.target.id==="cancel"){
      setEditBtnToggled(false)
    }
    if (e.target.id==='deleteInvoice'){

      setEditBtnToggled(false)
       const i=filteredinvoicesList.indexOf(currentInvoiceDetails);
    filteredinvoicesList.splice(i,1)
    setClickedInvoice(null)
    }
  }
  const handleOverlayClicked=(e)=>{
    if (e.target.id==='overlay')
    setEditBtnToggled(false)
  
  };
  return (
      <div id='overlay' onClick={handleOverlayClicked} className="overlay">
        <div className='modal   z-50 bg-paleBlue'>
            <h1>Confirm Deletion</h1>
            <p>
                Are you sure you want to delete invoice <span>#{clickedInvoice[0]}</span>   This action cannot be undone.
            </p>
            <div onClick={handleModalBtnBoxClicked} className='flex  '>
              <Button id='deleteInvoice'  name='Delete' bg='bg-paleRed'/>
              <Button id='cancel' name='Cancel' bg='bg-paleCyan'/>
            </div>
        </div>
      </div>
  
  )
}

export default Modal;
