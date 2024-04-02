import React from 'react'

function MarqueCard({img}) {
  return (
  <div className='h-28  mt-5 md:mx-5 '>
    <div className='h-[50%] md:h-[70%]  '>
      <img className='h-[90%] m-auto object-cover' src={img}/>
    </div>
  </div>
  )
}

export default MarqueCard