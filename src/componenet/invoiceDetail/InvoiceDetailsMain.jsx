import React,{useContext} from 'react'
import { AppContext } from '../Store/AppContext'
import "./invoiceDetailsMain.css"
const InvoiceDetailsMain = () => {
  const {clickedInvoice,filteredinvoicesList}=useContext(AppContext)
  const {id,createdAt,paymentDue,description,paymentTerms,clientAddress,clientName,senderAddress,clientEmail,status,total}=filteredinvoicesList.find(item=>item.id===clickedInvoice[0])
 const {street,city,postCode,country} = clientAddress;
 const {street:senderStreet,city:senderCity,postCode:senderPostCode,country:senderCountry} = clientAddress;
//  const {}
 console.log(senderAddress)
  return (
    <div className='invoiceDetailsMain mx-4 rounded-sm  bg-paleBlue p-3'>
      <div className='invoiceDetail-id'>
        <h3 className='text-white font-bold text-md'><strong className='text-paleCyan mr-1'>#</strong>{id}</h3>
        <p>{description}</p>
      </div>
     <div className='invcoieDetails-clientAdress  '>
        <p className='my-1' >{street}</p>
        <p className='my-1' >{city}</p>
        <p className='my-1' >{postCode}</p>
        <p className='my-1' >{country}</p>
      </div> 
      {/* row */}
      <div className='invoiceDateAndDue '>
        <div>
          <p className='my-1'>Invoice Date</p>
          <h2 className='font-bold text-xl mb-4'>{createdAt}</h2>
        </div>
        <div>
          <p className='my-1'>Payment Due</p>
          <h2 className='font-bold text-xl mb-4'>{paymentDue}</h2>
        </div>
      </div>
       {/* row */}
      <div className='billTo'>
        <p>Bill To</p>
        <h2 className='font-bold text-xl mb-4'>{clientName}</h2>
        <p className='my-1'>{senderStreet}</p>
        <p className='my-1'>{senderCity}</p>
        <p className='my-1'>{senderPostCode}</p>
        <p className='my-1'>{senderCountry}</p>
        
      </div>
      {/* row */}
      <div>
       <p className='my-2'>Sent To</p>
        <h2 className='font-bold text-xl mb-4'>{clientEmail}</h2> 
      </div>

    </div>
  )
}

export default InvoiceDetailsMain