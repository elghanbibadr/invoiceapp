import { createContext,useState } from "react";


export const AppContext=createContext(null);

export const AppContextProvider=({children})=>{
    const [them,setThem]=useState('dark')
    const [clickedInvoice,setClickedInvoice]=useState(null);

    const value={
        them,
        setThem,
        clickedInvoice,
        setClickedInvoice
    }

    return <AppContextProvider value={value} >{children}</AppContextProvider>
}