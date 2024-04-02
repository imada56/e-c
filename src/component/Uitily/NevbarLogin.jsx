import React from 'react'
import { Link } from 'react-router-dom'
import {FaCartPlus ,FaHome,FaSearch ,FaUser}from 'react-icons/fa'



function NevbarLogin() {
  return (
    <section className='relative'>
    <header className='bg-gray-600 h-20 fixed top-0 left-0 w-full z-30 '>
      <div className='container pt-4 '>
         <div className='h-12 flex justify-around items-center px-6'>
         <Link  className='underline text-white' to={'/'}>New Resteron </Link>
            <div className='flex '>
              <input className='relative w-[200px] rounded-full border-2 sm:w-[300px] md:w-[450px] lg:w-[750px]' type="text"/>
              <FaSearch className='text-gray-500 absolute mt-2  ml-[175px] sm:ml-[285px] md:ml-[425px] lg:ml-[725px]'/>
            </div>
            <div className=''>
              
            <Link className='mx-5 underline inline-flex gap-1 text-white cursor-pointer' to={'/login'}>
              <FaUser className='mt-1'/> Cnx </Link>
            
              <Link className='underline inline-flex gap-1 text-white cursor-pointer' to={'/DetailDuProduit'}>
            <FaCartPlus className='mt-1'/> Char </Link>
            
            </div>

         </div>
      </div>
  </header>

</section>
  )
}

export default NevbarLogin