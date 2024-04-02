import React from 'react'

function CardCategory({img,title,background}) {
  return (
    
      <div className='  h-[70%] flex flex-col items-center gap-2'>
      <div className=' h-[80%] w-[70%]   400 pt-5 rounded-full bg-opacity-20'
           style={{backgroundColor:`${background}`}}> 
          <div className='h-[80%]'>
                <img className='h-[90%]  m-auto object-cover'  src={img} alt="" />
           </div>
     </div> 
            <p className='font-mono text-center text-xs'>{title}</p>
    </div>
    
  )
}

export default CardCategory