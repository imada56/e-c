import React from 'react'

function AllCategory({categorie,fct}) {

  const onFilter =(cat)=>{
    fct(cat)
   }
  return (
    <div className='flex justify-center  ml-1 bg-slate-100 mt-20 h-10  '>
       {categorie.map((item)=>(
            <button key={item} onClick={()=>onFilter(item)}
            className='px-2  rounded-md  hover:bg-gray-400 '>{item}</button>

          ))}
        
    </div>
  )
}

export default AllCategory