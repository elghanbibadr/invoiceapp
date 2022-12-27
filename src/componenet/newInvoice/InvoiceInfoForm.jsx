import React, {useState,useContext} from 'react'
import InvoiceInfoInputWrraper from './InvoiceInfoInputWrraper';
import { formData } from './FormInputData'
import InvoiceInfoFooter from './InvoiceInfoFooter';
import Button from '../GlobalComponenet/Button';
import ItemInfos from './ItemInfos';
import { AppContext } from '../Store/AppContext';


const InvoiceInfoForm = () => {
  const {setInvoiceInfoMenuVisible}=useContext(AppContext);
  const [formValues,setFormValues]=useState({
    streetAdress:'',
    country:'',
    city:'',
    postCode:'',
    clientName:'',
    clientEmail:'',
    clientStreetAdress:'',
    clientCountry:'',
    clientCity:'',
    invoiceDate:'',
    selectedChoice:'',
    projectDesc:'',
    itemName:''

  });



   
  const handleInputChanegs=(e)=>{
    const {name,value}=e.target;
    setFormValues({...formValues ,[name]:value})
  }
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(formValues)
    for (let key in formValues){
      if(formValues[key]===""){
       return alert('please fill all the input')
       
      }
    }
    console.log('yoo')
    
  }
  return (
    <form onSubmit={handleFormSubmit}>
      {formData.map(({id,type,label,name},index)=>{
            return <InvoiceInfoInputWrraper    id={id} i={index} name={name} handleChange={handleInputChanegs} type={type} value={formValues.name}    label={label}   />
           })}
            <ItemInfos />
          <Button name=' Add New Item' bg='bg-paleBlue flex justify-center w-3/4 m-8 ' />
          <InvoiceInfoFooter />
    </form>
  )
}

export default InvoiceInfoForm