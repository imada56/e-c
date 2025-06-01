import React from 'react'
//import gift3 from '../../Assets/Images/gift3.png'
import {FaApple,FaArrowRight}from 'react-icons/fa'
import p13 from '../../Assets/Images/hero_endframe__cvklg0xk3w6e_large 2.png'

function DivPublicite() {
  return (
    <div className='container m-auto mt-4 p-5  flex justify-between h-[300px]  w-[80%] bg-black'>
        <div className='flex flex-col justify-center px-3 gap-3  w-[45%]'>
          <div className='md:w-[60%] flex flex-col md:flex-row md:px-5 justify-between md:items-center '>
            <FaApple className='text-4xl text-white'/>
            <p className=' text-xs font-thin text-white'>iPhone 14 Series</p>
          </div>
          <p className=' font-bold text-white  text-xl md:text-3xl  '>Special offer sale 59%</p>
          <div className='flex gap-2 items-center'>
             <a  className=' text-sm underline  font-thin text-white ' href="">Shop Now</a>
             <FaArrowRight className='text-white'/>
          </div>
          
        </div>
        <div className=' h-[100%] flex items-center justify-center text-center  w-[55%] '>
        <img className='object-fill h-[90%] md:w-[70%]' src={p13} alt="" />
        </div>
    </div>
  )
}

export default DivPublicite