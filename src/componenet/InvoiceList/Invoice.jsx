import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Store/AppContext';
// import data from '.'
import "./invoice.css"


const Invoice = (props) => {
    const {setClickedInvoice}=useContext(AppContext)
    const dueDate = `due ${new Date(props.paymentDue).toDateString()}`;
    const sliced=dueDate.slice(3,7);
    const dueDateFormatted=dueDate.replace(sliced,"");
    
    const handleInvoiceClicked=(e)=>setClickedInvoice([e.currentTarget.id]);
    

    
    return (
        <div id={props.id} onClick={handleInvoiceClicked} className='invoice mt-6  bg-paleBlue p-6 rounded-md cursor-pointer hover:border border-paleCyan '>
            <h3 className='invoice__id text-white font-bold '><strong className='text-paleCyan text-md mr-1'>#</strong>{props.id}</h3>
            <p className='invoice__ownerName justify-self-end'>{props.clientName}</p>
            <p className='invoice__dueDate '>{dueDateFormatted}</p>
            <div className='invoice__status  w-fit p-1 flex items-center justify-self-end  '>
                <svg fill={props.statusValues.iconFill}  className='invoice__status-cirlce  h-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path  d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
                </svg>
                <span className={`${props.statusValues.bg} font-bold ml-2`}>{props.statusValues.name}</span>
            </div>
            <h2 className='invoice__amount font-bold '>{`$${props.total || '0'}`} </h2>
        </div>
    )
}

export default Invoice