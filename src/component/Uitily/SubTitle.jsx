import React from 'react'
import { Link } from 'react-router-dom'

function SubTitle({title,btnTitle,path}) {
  return (
    <div className='m-3 flex justify-between'>
        <div className='font-bold m-2'>{title} </div>
        {btnTitle ? (
       <Link to={`${path}`}> <div className='border-2 rounded-lg p-1 font-medium border-black '>{btnTitle}</div> </Link> 
        ):null}
    </div>
  )
}

export default SubTitle