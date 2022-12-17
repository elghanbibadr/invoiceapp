import { createContext,useState } from "react";


export const appContext=createContext(null);

export const appContextProvider=({children})=>{
    const [them,setThem]=useState('dark')
    const [clickedInvoice,setClickedInvoice]=useState(null);

    const value={
        them,
        setThem,
        clickedInvoice,
        setClickedInvoice
    }

    return <appContextProvider value={value}>{children}</appContextProvider>
}