import React from 'react'

const ItemInfos = () => {
  return (
    <div className='itemInfos flex  items-center'>
   <div className='itemInfo__Qty-wraper '>
    <p>Qty</p>
    <input className='p-3 m-2 w-28  bg-paleBlue  font-bold'  type='number' />
   </div>
   <div className='itemInfo__price-wraper '>
    <p>Price</p>
    <input className='p-3 m-2 w-28 bg-paleBlue  font-bold' type='number' />
   </div>
   <div className='itemInfo__Total-wraper     font-bold'>
    <p>Total</p>
    <input className='bg-paleBlue p-3 w-28' type='number' />
   </div>
    </div>
  )
}

export default ItemInfos