export const generateColorForStatusText=(value)=>{
    return value==='paid' ? "text-green-500" : value=="draft" ? "text-gray-500" :"text-orange-500";
  }
  
 export  const generateColorForStatusIcon=(value)=>{
    return value==='paid' ? "#48bb78" : value=="draft" ? "gray" :"orange";
  
  }