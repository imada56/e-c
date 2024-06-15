import React from 'react'
import NevbarLogin from '../../component/Uitily/NevbarLogin'
import Slider from '../../component/Home/Slider'
import HomeCategory from '../../component/Home/HomeCategory'
import DivPublicite from '../../component/Home/DivPublicite'
import ContinerProductCard from '../../component/Products/ContinerProductCard'
import ContinerMarqueCard from '../../component/Marque/ContinerMarqueCard'
import Footer from '../../component/Uitily/Footer'
import {FaCaretRight ,FaCaretUp ,FaUser}from 'react-icons/fa'

function HomePage({tb1,tb2,titlePrdct}) {
  return (
    <div className='' >
        
      <div className='w-[85%] container m-auto mt-32'>
        <div className='w-[100%] flex   gap-4  justify-end  '>
        <div className='w-[30%] flex flex-col gap-4 justify-center border-r-2 px-1 py-5 min-w-[150px] md:px-6 '> 
            <div className=' flex flex-col gap-3 md:px-3    md:py-3'>
            <p className='text-xs hover:font-semibold hover:scale-105 transition-all duration-100 cursor-pointer md:text-sm inline-flex gap-6'>Woman’s Fashion <FaCaretRight className='mt-1'/></p>
            <p className='text-xs hover:font-semibold hover:scale-105 transition-all duration-100 cursor-pointer md:text-sm inline-flex gap-6'>Men’s Fashion <FaCaretRight className='mt-1'/></p>
            <p className='text-xs hover:font-semibold hover:scale-105 transition-all duration-100 cursor-pointer md:text-sm inline-flex gap-6'>Electronics <FaCaretRight className='mt-1'/></p>
            <p className='text-xs hover:font-semibold hover:scale-105 transition-all duration-100 cursor-pointer md:text-sm'>Home & Lifestyle</p>
            <p className='text-xs hover:font-semibold hover:scale-105 transition-all duration-100 cursor-pointer md:text-sm'>Medicine</p>
            <p className='text-xs hover:font-semibold hover:scale-105 transition-all duration-100 cursor-pointer md:text-sm'>Sports & Outdoor</p>
            <p className='text-xs hover:font-semibold hover:scale-105 transition-all duration-100 cursor-pointer md:text-sm'>Baby’s & Toys</p>
            <p className='text-xs hover:font-semibold hover:scale-105 transition-all duration-100 cursor-pointer md:text-sm'>Groceries & Pets</p>
            <p className='text-xs hover:font-semibold hover:scale-105 transition-all duration-100 cursor-pointer md:text-sm'>Health & Beauty</p>
            </div>
            
        </div>
        <DivPublicite className=''/>
        </div>
        
        <Slider/>
       <HomeCategory/>
       <ContinerProductCard  titlePrdct={titlePrdct} tb={tb1} Produits={'Produits'} Ajouter={'Ajouter'}/>
       <ContinerProductCard titlePrdct={titlePrdct} tb={tb1} Produits={'Best Selling Products'} Ajouter={'Ajouter'}/>
       <DivPublicite/>
       <ContinerProductCard titlePrdct={titlePrdct} tb={tb1} Produits={'Offre spéciale'} Ajouter={'Ajouter'}/>
       <ContinerMarqueCard tb={tb2}  Produits={'Marque'} Ajouter={'Ajouter'}/>
       
      </div>
      
    </div>
  )
}

export default HomePage