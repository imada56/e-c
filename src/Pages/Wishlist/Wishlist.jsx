import React, { useContext, useEffect, useState } from 'react'
import ContinerProductCard from '../../component/Products/ContinerProductCard'
import { useSelector } from 'react-redux'
import { DataProduit } from '../../Data/ProduitData';
import {FaExclamationTriangle}from 'react-icons/fa'
import { ValueConntext } from '../../component/Context';

function Wishlist() {
    var element; 
    const {TabLike} =useSelector(state =>state.Liked)
    console.log('aywaaa =',TabLike)
   //console.log(DataProduit[1])
   //(DataProduit[v].filter((j)=>(j.titel.includes(word.toLowerCase()))))
   
    const data1= DataProduit[1].filter(item=>TabLike.includes(item.id))
    const data2= DataProduit[2].filter(item=>TabLike.includes(item.id))
    const dataa=data1.concat(data2)
    //console.log('ayoubi ===' ,data)
       
  return (
   
    <div className='min-h-screen mt-[140px] '>
        {
            TabLike.length === 0 ?(
                <div className='w-[85%] container m-auto flex flex-col p-7 gap-3 bg-gray-400 items-center justify-center mt-60'>
                          <h1 className=' text-4xl font-semibold text-[#F5F5F5]'> You Did Not Like Any Product</h1>
                          <FaExclamationTriangle className=' text-8xl text-[#F5F5F5] '/>
                </div>
            ):(
                 <div className='w-[85%] container m-auto mt-32'>
            <ContinerProductCard tb={dataa} w={'oui'}  Produits={''} Ajouter={''} y={'ga3'}/>
          </div>
            )
        }

       
        
    </div>

  )
}

export default Wishlist