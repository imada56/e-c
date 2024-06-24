import React from 'react'
import { Link } from 'react-router-dom'

function SubTitle({title,btnTitle,path}) {
  return (
    <div className='m-3 flex justify-between'>
        <div className='font-bold m-2 text-2xl'>{title}  </div>
        {btnTitle ? (
       <Link to={`${path}`}> <div className=' mx-2 text-sm md:text-base px-2 py-2 border-2 text-white  bg-red-500'> {btnTitle}</div> </Link> 
        ):null}
    </div>
  )
}

export default SubTitle

