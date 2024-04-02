import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({imgs}) {
  return (
  <Link to={'/DetailDuProduit'}> <div className='h-56 shadow-black shadow-lg rounded-xl bg-white md:w-48 '>
    <div className='h-[55%]  '>
      <img className='h-full ml-7 w-fit ' src={imgs}/>
    </div>
    
        <i>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
         </svg>

        </i>
        <p className='pl-2 font-serif text-black'>Lorem ipsum dolor sit amet consectet
        </p>
        <div className='px-2 flex flex-row justify-between text-yellow-500'>
            <p>546$</p>
            <p>*3.3</p>
        </div>
    
</div></Link> 
  )
}

export default ProductCard