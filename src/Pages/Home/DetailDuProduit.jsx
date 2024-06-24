import React, { useState } from 'react'
import img63  from '../../Assets/Images/image 63.png'
import img57  from '../../Assets/Images/image 57.png'
import img58  from '../../Assets/Images/image 58.png'
import img59  from '../../Assets/Images/image 59.png'
import img61  from '../../Assets/Images/image 61.png'
import imgv  from '../../Assets/Images/Vector.png'
import imgv1  from '../../Assets/Images/Vector1.png'
import {FaElementor}from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function DetailDuProduit({imgs}) {
  const [count ,setCount]=useState(0)
  const handelclikdecrement = ()=>{
    if(count>0){setCount(count-1);}
    
  }

  const handelclikincrement = ()=>{
    setCount(count+1);
  }



  return (
    <section className='  mt-[140px] '>
    <div className='container m-auto   w-[75%] flex flex-col md:flex-row gap-2  md:h-[400px]'>
    <div className='flex w-[100%] md:w-[60%] gap-2 '>
    <div className=' flex flex-col justify-around gap-2 w-[24%] h-[100%]'>
      <div className='bg-[#F5F5F5] h-[25%] flex items-center justify-center'><img className='h-[80%] w-[70%] object-fill ' src={img57} alt="" /></div>
      <div className='bg-[#F5F5F5] h-[25%] flex items-center justify-center'><img className='h-[80%] w-[70%] object-fill   ' src={img58} alt="" /></div>
      <div className='bg-[#F5F5F5] h-[25%] flex items-center justify-center'><img className='h-[80%] w-[70%] object-fill   ' src={img59} alt="" /></div>
      <div className='bg-[#F5F5F5] h-[25%] flex items-center justify-center'><img className='h-[80%] w-[70%] object-fill   ' src={img61} alt="" /></div>
    </div>
    <div className='bg-[#F5F5F5] flex items-center justify-center w-[74%] '>
      <div className='flex items-center justify-center h-[85%]  w-[85%] '>
        <img className='object-fill w-[85%]' src={imgs} alt="" />
      </div>
    </div>
    </div>
    <div className=' md:w-[45%] flex flex-col gap-2 '>
     <div className=' flex flex-col gap-1 border-b-2 pb-2 px-3   '>
     <label  className='text-xl text-black'htmlFor="">Havic HV G-92 Gamepad</label>
      <div className='flex gap-1 items-center text-xs'>
      <img src={imgv} alt="" />
      <img src={imgv} alt="" />
      <img src={imgv} alt="" />
      <img src={imgv1} alt="" />
      <p>(150 Reviews0)</p>
      <p className='border-l-2 border-black pl-1 text-green-400'> In Stock</p>
       </div>
      <span className='font-semibold '>$192.00</span>
      <p>
        PlayStation 5 Controller Skin High quality 
        vinyl with air channel adhesive for easy bubble
         free install & mess free removal 
         Pressure sensitive.
         </p>
          
     </div>
          <div className='flex gap-6 px-3 mb-1 '>
          <h4 className='font-serif'>colours :</h4>
          <div className='flex gap-2'>
          <input className='' type="radio" name="" id="" />
          <input type="radio" name="" id="" />
          </div>
          </div>
          <div className=' flex gap-7 px-3 '>
          <h4 className='font-serif'>Size :</h4>
          <div className='flex gap-4'>
          <div className='border-2 h-8 w-8 flex justify-center items-center rounded-md text-sm hover:text-white hover:bg-[#DB4444]'>XS</div>
          <div className='border-2 h-8 w-8 flex justify-center items-center rounded-md text-sm hover:text-white hover:bg-[#DB4444]'>S</div>
          <div className='border-2 h-8 w-8 flex justify-center items-center rounded-md text-sm hover:text-white hover:bg-[#DB4444]'>M</div>
          <div className='border-2 h-8 w-8 flex justify-center items-center rounded-md text-sm hover:text-white hover:bg-[#DB4444]'>L</div>
          <div className='border-2 h-8 w-8 flex justify-center items-center rounded-md text-sm hover:text-white hover:bg-[#DB4444]'>XL</div>
            
            </div>
            </div>
    <div className='flex justify-around my-2 px-3  items-center ' >
<div className='flex  border-2 border-black'>
  <button onClick={()=>handelclikincrement()} className='border-r-2 border-black h-8 w-8 hover:text-white hover:bg-[#DB4444]'>+</button>
  <div className='h-8 w-16 flex justify-center items-center ' >{count}</div>
  <button  onClick={()=>handelclikdecrement()} className=' border-l-2 border-black h-8 w-8 hover:text-white hover:bg-[#DB4444]'>-</button>
</div>
<Link className='' to={'/cartPage'}>
         <div className='h-8 w-32 flex justify-center items-center text-white bg-[#DB4444]'>Buy Now</div>
</Link>
<FaElementor/>
    </div>
    
    <div className='flex flex-col border-2 px-3 border-black w-[80%] h-[26%]'>
      <div className='flex gap-2 border-b-2 items-center border-black h-[50%] '>
      <FaElementor className='text-2xl '/>
        <div><h6>Free Delivery</h6>
        <p className='text-xs'>Enter your postal code for Delivery Availability</p></div>
      </div>
      <div className='flex gap-2 items-center h-[50%] '>
        <FaElementor className='text-2xl '/>
        <div><h6>Return Delivery</h6>
        <p className='text-xs'>Free 30 Days Delivery Returns. Details</p></div>
      </div>
          </div>
    </div>
    
   
    </div>
</section>
  )
}

export default DetailDuProduit