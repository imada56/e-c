import React, { createContext, useState } from 'react'
const ValueConntext= createContext();


function Context({children}) {
const [data,setData]=useState([1,''])
const onChange=(word)=>{
setData([word,0]);
}
  return (
    
    <div>
      <ValueConntext.Provider  value={{data,onChange}}>
        {children}
      </ValueConntext.Provider>
    </div>
  )
}

export {Context,ValueConntext}