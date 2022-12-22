import React from 'react'
import './button.css'
import plusIcon from '../../assets/icon-plus.svg'
const Button = (props) => {
    if (!props.btnWithIcon){
  return (
    <button id={props.id} className={`${props.bg} flex py-4 m-3 items-center px-6 btn text-white font-bold p-2 rounded-full hover:${props.hoverColor} `} > {props.name} </button>
  )
    }else{
        return (
            <button id={props.id} className= 'flex items-center btn text-white font-bold p-3 rounded-3xl' >
            <img src={plusIcon} className='p-2 mr-2 bg-white rounded-full' />
        {props.name}
    </button>   
          )
    }
}

export default Button