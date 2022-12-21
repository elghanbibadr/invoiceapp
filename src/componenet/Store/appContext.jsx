import { createContext,useState } from "react";
import { data } from "../../data";

export const AppContext=createContext(null);


export const AppContextProvider=({children})=>{
    const [them,setThem]=useState('dark');
    const [checkedBoxes,setCheckedBoxes]=useState([]);
    const [clickedInvoice,setClickedInvoice]=useState(null);
    const [filteredinvoicesList,setInvoicesFilteredList]=useState(data)
    const [invoiceNumber,setInvoiceNumber]=useState(7);

    const value={
        them,
        setThem,
        clickedInvoice,
        invoiceNumber,
        setInvoiceNumber,
        setClickedInvoice,
        checkedBoxes,
        setCheckedBoxes,
        filteredinvoicesList,
        setInvoicesFilteredList
    }

    return <AppContext.Provider value={value} >{children}</AppContext.Provider>
}