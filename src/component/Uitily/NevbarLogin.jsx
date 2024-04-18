import React, {useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import {FaCartPlus ,FaSearch ,FaUser}from 'react-icons/fa'
import { useRef } from 'react'
import { ValueConntext } from '../Context'


function NevbarLogin({fct_rech}) {
  const headerScroll=useRef();
  useEffect(()=>{
    
    window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
            headerScroll.current.style.background='#131822';
            headerScroll.current.style.padding=" 0px 0px 30px 0px"
            //headerScroll.current.style.margin=" 0px 0px 0px 50px"
            
        }
        else{
          
          headerScroll.current.style.background='rgb(7 89 133)';
          headerScroll.current.style.padding=" 0px 0px 0px 0px"
         
        }
    })
},[])
  const {data,onChange} = useContext(ValueConntext)
  const inputRecherch = useRef();
  const v=data[0]
  useEffect(() => {
  inputRecherch.current.value=''
  }, [v])

  const Recherch = ()=>{
    fct_rech(inputRecherch.current.value)
   // data[1]=inputRecherch.current.value;
  }
  

  return (
    
    <header ref={headerScroll} className='bg-sky-800  fixed top-0 left-0 w-full z-30 transition-all duration-200 '>
      <div className='container pt-4 '>
         <div className='h-12 flex justify-around items-center px-6'>
         <Link  className='underline text-white' to={'/'}>New Resteron </Link>
            <div className='flex '>
              <input ref={inputRecherch} onChange={()=>Recherch()} className='relative w-[200px] rounded-full border-2 sm:w-[300px] md:w-[450px] lg:w-[750px]' type="text"/>
             <button 
            //  onClick={()=>Recherch()}
             className='text-gray-500 absolute mt-2  ml-[175px] sm:ml-[285px] md:ml-[425px] lg:ml-[725px]' ><FaSearch /></button> 
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


  )
}

export default NevbarLogin