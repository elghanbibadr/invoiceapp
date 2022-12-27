import React, {useState,useContext} from 'react'
import InvoiceInfoInputWrraper from './InvoiceInfoInputWrraper';
import { formData } from './FormInputData'
import InvoiceInfoFooter from './InvoiceInfoFooter';
import ItemInfos from './ItemInfos';
import { AppContext } from '../Store/AppContext';
import { data } from '../../data';

const InvoiceInfoForm = () => {
  const {setInvoiceInfoMenuVisible}=useContext(AppContext)
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



   
  const handleInputChange=(e)=>{
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
    const createdInvoice={
      id:'',
      "createdAt":formValues.invoiceDate,
      "paymentDue":new Date().toDateString(),
      "description":formValues.projectDesc,
      "paymentTerms":"1",
      "clientName":formValues.clientName,
      "clientEmail":formValues.clientEmail,
      "status":"pending",
      "senderAddress":{
       "street":formValues.streetAdress,
       "city":formValues.city,
       "postCode":formValues.postCode,
       "country":formValues.country
      },
      "clientAddress":{
        "street":formValues.clientStreetAdress,
        "city":formValues.clientCity,
        "postCode":formValues.postCode,
        "country":formValues.clientCountry,

      },
      "items":[
        {
          "name":formValues.itemName,
          "quantity":'1',
          "price":1999,
          'total':777
        }
      ]
    };

    
    data.push(createdInvoice);
    setInvoiceInfoMenuVisible(false)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {formData.map(({id,type,label,name},index)=>{
            return <InvoiceInfoInputWrraper    id={id} i={index} name={name} handleChange={handleInputChange} type={type} value={formValues.name}    label={label}   />
           })}
            <ItemInfos />
          <InvoiceInfoFooter />
    </form>
  )
}

export default InvoiceInfoForm