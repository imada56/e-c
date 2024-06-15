import React, {useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import {FaCartPlus,FaAlignCenter ,FaFontAwesomeAlt ,FaSearch,FaCaretDown,FaCaretUp ,FaUser,FaBars}from 'react-icons/fa'
import { useRef } from 'react'
import { ValueConntext } from '../Context'
import { useState } from 'react'


function NevbarLogin({fct_rech}) {
  const headerScroll=useRef();
  const menu=useRef();
  const btn =useRef()
  const [isOpen,setIsOpen]=useState(false);
  const [a,setA]=useState(false);
  useEffect(()=>{
    
    
    

    window.addEventListener('scroll',()=>{
      
      // if(window.screenX>700){
      //   btn.current.style.opacity ='0';
      // }else{
      //   btn.current.style.opacity ='1';
      // }
        if(window.scrollY>100){
            headerScroll.current.style.background='#F5F5F5';
            headerScroll.current.style.padding=" 0px 0px 10px 0px"
            menu.current.style.background='#F5F5F5'
            //headerScroll.current.style.margin=" 0px 0px 0px 50px"
            
        }
        else{
          
          headerScroll.current.style.background='#FFFFFF';
          headerScroll.current.style.padding=" 0px 0px 0px 0px"
          menu.current.style.background='#FFFFFF'
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
  const fct = ()=>{
    a ?(menu.current.style.top='-500%')
    :(
      menu.current.style.top='72px'
    )
    
     ;
  }

  return (
    
    <header ref={headerScroll} className='bg-[#FFFFFF] fixed top-0 left-0 w-full h-[130px] z-30 transition-all duration-200 '>
      <div className='h-[40%] bg-[#000000] sm:pt-3 sm:px-2 flex justify-between relative'>
          <p className='xl:ml-[300px] lg:ml-[200px] xl:my-[7px] text-[#FAFAFA] sm:text-xs xl:text-base font-medium'>Summer Sale For All Swim Suits 
          And Free Express Delivery - OFF 50%!  
          <a className='underline sm:text-xs xl:text-base text-white ml-2' href="">ShopNow</a></p>
          <button
          onClick={()=>setIsOpen((prev)=>!prev)}
           className='xl:mr-[130px] sm:text-xs xl:text-lg xl:my-[7px] text-[#FAFAFA]  inline-flex gap-1 font-medium' 
           href="">
            Franch
            {!isOpen ? (
              <FaCaretDown className='mt-1'/>
            ):
               <FaCaretUp className='mt-1'/>
            } 
            </button>
            {isOpen && (<div className='absolute top-9 z-30 bg-slate-50  mt-5 ml-[82%] w-36  '>
              <a className='my-2 font-mono block cursor-pointer hover:bg-slate-200 '>English</a>
              <a className='my-2 font-mono block cursor-pointer hover:bg-slate-200 '>Arab</a>
              <a className='my-2 font-mono block cursor-pointer hover:bg-slate-200'>Espanol</a>
            </div>)}
         
      </div>
      <div className=' py-4 h-[60%] border-b-2 flex justify-around  items-center
        border-l-2  px-6  md:mx-[42px] relative'>

       
         <div className='w-[25%]  md:w-[55%] lg:w-[px] flex justify-between '>
          <div>
          <Link  className='my-[7px] mr-[90px]  font-bold text-2xl md:text-3xl  text-black' to={'/'}>Exclusive </Link>
          </div>
          <div 
          ref={menu}
          className=' flex flex-col text-center  absolute lg:static left-0 top-[-500%] 
           lg:flex-row justify-center gap-4  w-full bg-slate-1   lg:w-[260px] min-h-[230px] bg-white  lg:min-h-fit '>
          <Link  className='hover:bg-gray-200 py-2 text-black cursor-pointer' to={'/'}>Home</Link>
          <Link  className='hover:bg-gray-200 py-2 text-black cursor-pointer' to={'/contact'}>Cantact </Link>
          <Link  className='hover:bg-gray-200 py-2 text-black cursor-pointer' to={'/about'}>Abouts </Link>
          <Link  className='hover:bg-gray-200 py-2 text-black cursor-pointer' to={'/nouvelleInscription'}>Singe Up </Link>
          </div>
         </div>
         <div className='  flex md:gap-6 items-center justify-center  mr-6 md:px-2 h-[90%] w-[65%]  md:w-[35%] '>
            <div className='flex shadow-md shadow-slate-600 w-[15%] hover:w-[70%]  md:w-[60%] transition-all duration-1000 rounded-md h-[80%] relative bg-[#FFFFFF] items-center'>
             
              <input
              placeholder='What are you looking for?' ref={inputRecherch} onChange={()=>Recherch()} 
              className='absolute pl-9 md:pl-0 hover:pl-1  text-xs md:text-sm  outline-none h-full w-[90%]  md:w-[90%] rounded-l-md px-4'
              type="text"/>
             <label 
             className='absolute right-3  ' 
             ><FaSearch />
             </label> 

            </div>
            <div className='flex justify-around w-[26%] md:w-[25%]'>
              
            <Link className='mx-5 underline  gap-1 text-xl cursor-pointer' to={'/login'}>
              <FaUser className='mt-1'/>  </Link>
            
              <Link className='underline  text-xl cursor-pointer' to={'/cartPage'}>
            <FaCartPlus className='mt-1'/>  </Link>
            
            </div>
         </div>
         
          <button className=' absolute right-3 text-xl  opacity-1 lg:opacity-0' ref={btn} onClick={()=>{setA((prev)=>!prev)
        fct()}}>
         {!a ? (
              <FaBars className='mt-1'/>
            ):
            <FaFontAwesomeAlt  /> 
            }
          
          </button>
         
      </div>
  </header>


  )
}

export default NevbarLogin