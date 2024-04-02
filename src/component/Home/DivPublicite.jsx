import React from 'react'
// import p13 from '../public/iphone-1.png'

function DivPublicite() {
  return (
    <div className='container m-auto mt-4 px-10 bg-opacity-75 flex justify-between md:px-32 h-32 w-[80%] bg-blue-950'>
        <p className='from-red-900 font-bold text-red-500 mt-10 text-xl md:text-3xl  '>Offre spéciale vente 59% </p>
        <div className='w-[18%] h-[90%] lg:w-[10%] '>
          <img className='object-fit' src='iphone-2.png' alt="" />
        </div>
    </div>
  )
}

export default DivPublicite