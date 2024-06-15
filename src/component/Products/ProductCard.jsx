import React from 'react'
import { Link } from 'react-router-dom'
import {FaHeart}from 'react-icons/fa'
import imgv  from '../../Assets/Images/Vector.png'
import imgv1  from '../../Assets/Images/Vector1.png'
function ProductCard({imgs ,titlePrdct}) {
  return (
  <Link to={'/DetailDuProduit'}> <div className='max-h-56 min-h-56  shadow-black flex flex-col bg-[#F5F5F5] items-center justify-center shadow-md rounded-xl  w-[90%] md:w-[80%] xl:w-[70%]  '>
    <div className='h-[120px]  flex items-center justify-center  w-[80%] '>
      <img className='h-[80%] object-fill' src={imgs}/>
    </div>
           
        <div className='h- w-[100%] px-3 py-1 flex flex-col justify-around'>
        <FaHeart className='hover: text-red-400   text-2xl'/>
        <p className=' font-semibold text-sm   '>{titlePrdct}
        </p>
        <div className=' flex flex-row justify-between text-red-500'>
            <p className=''>546$</p>
            <div className='flex gap-1 items-center text-xs'>
      <img src={imgv} alt="" />
      <img src={imgv} alt="" />
      <img src={imgv} alt="" />
      <img src={imgv1} alt="" />
      {/* <p>(150 Reviews0)</p>
      <p className='border-l-2 border-black pl-1 text-green-400'> In Stock</p> */}
            </div> 
        </div>
        </div>
    {/* <div className='flex gap-1 items-center text-xs'>
      <img src={imgv} alt="" />
      <img src={imgv} alt="" />
      <img src={imgv} alt="" />
      <img src={imgv1} alt="" />
      <p>(150 Reviews0)</p>
      <p className='border-l-2 border-black pl-1 text-green-400'> In Stock</p>
       </div> */}
</div></Link> 

  )
}

export default ProductCard