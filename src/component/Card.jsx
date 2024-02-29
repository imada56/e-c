import React from 'react'

function Card() {
  return (
    <div>
        <div className='m-2 border-2 p-2 h-48 flex justify-between gap-1'>
          
           <div className=' w-[400px] flex flex-col justify-center items-center gap-3'>
            <div className='h-[60%]'>
            <img className='h-full rounded-full' src="pc-2.webp" alt="" />
            </div>
            <p> Promontion </p>
           </div>
           <div className=' w-[400px] flex flex-col justify-center items-center gap-3'>
            <div className='h-[60%] '>
            <img className='h-full rounded-full' src="iphone-1.png" alt="" />
            </div>
            <p> Promontion </p>
           </div>
           <div className=' w-[400px] flex flex-col justify-center items-center gap-3'>
            <div className='h-[60%]'>
            <img className='h-full rounded-full' src="iphone-2.png" alt="" />
            </div>
            <p> Promontion </p>
           </div>
           <div className=' w-[400px] flex flex-col justify-center items-center gap-3'>
            <div className='h-[60%]'>
            <img className='h-full rounded-full' src="pc-1.png" alt="" />
            </div>
            <p> Promontion </p>
           </div>
           

        </div>
    </div>
  )
}

export default Card