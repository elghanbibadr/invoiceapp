import React from 'react'
import "./invoice.css"
const Invoice = () => {
    return (
        <div className='invoice mt-6 grid grid-cols-2 grid-rows-3 gap-2 bg-paleBlue p-6 rounded-md cursor-pointer '>
            <h3 className='invoice__id text-white font-bold '>#RT2080</h3>
            <p className='invoice__ownerName justify-self-end'>Alysa Werner</p>
            <p className='invoice__dueDate'>Due 12 Oct 2021</p>
            <div className='invoice__status bg-orange-200 w-fit p-1 flex items-center justify-self-end  '>
                <svg fill='orange' className='invoice__status-cirlce h-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
                </svg>
                <span className='text-orange-400 ml-2 '>Pending</span>
            </div>
            <h2 className='invoice__amount font-bold '>$102.04</h2>
        </div>
    )
}

export default Invoice