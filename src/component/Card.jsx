import React from 'react'

function Card({img}) {
  return (
    <section>
    <div className='h-[60%]'>
            <img className='h-full rounded-full' src={img} alt="" />
            </div>
            <p> Promontion </p>
       
    </section>
  )
}

export default Card