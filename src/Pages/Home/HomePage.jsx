import React from 'react'
import NevbarLogin from '../../component/Uitily/NevbarLogin'
import Slider from '../../component/Home/Slider'
import HomeCategory from '../../component/Home/HomeCategory'
import DivPublicite from '../../component/Home/DivPublicite'
import ContinerProductCard from '../../component/Products/ContinerProductCard'
import ContinerMarqueCard from '../../component/Marque/ContinerMarqueCard'
import Footer from '../../component/Uitily/Footer'
import {FaCaretRight ,FaCaretUp ,FaUser}from 'react-icons/fa'
import SubTitle from '../../component/Uitily/SubTitle'
import attractive_woman from '../../Assets/Images/attractive_woman.png'
import amazon_gucci from '../../Assets/Images/amazon-gucci.png'
import amazon_png1 from '../../Assets/Images/amazon-png1.png'
import pes5 from '../../Assets/Images/pes5.png'
import icon_shop  from '../../Assets/Images/vector/icon_shop.png'
import icon_moneybag from '../../Assets/Images/vector/Icon-Moneybag.png'
import icon_shopping_bag  from '../../Assets/Images/vector/Icon-Shopping bag.png'



function HomePage({tb1,tb2,tb3,titlePrdct}) {
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
       <ContinerProductCard w={'nn'} titlePrdct={titlePrdct} tb={tb1} Produits={'Produits :'} Ajouter={'Ajouter'}/>
       <ContinerProductCard w={'nn'} titlePrdct={titlePrdct} tb={tb1} Produits={'Best Selling Products :'} Ajouter={'Ajouter'}/>
       <DivPublicite/>
       <ContinerProductCard w={'nn'} titlePrdct={titlePrdct} tb={tb1} Produits={'Offre spéciale :'} Ajouter={'Ajouter'}/>
       <ContinerMarqueCard tb={tb2}  Produits={'Marque'} Ajouter={'Ajouter'}/>
        <div>
          <SubTitle title='New Arrival'/>
          <div className=' flex gap-2 min-h-[300px] justify-center'>
            <div className='bg-black w-[50%] relative px-2' >
              <img className='' src={pes5} alt="" />
              <div className='absolute bottom-1'>
                <h1 className='text-white text-base md:text-lg '>PlayStation 5</h1>
                <p className='text-white text-xs md:text-sm '>Black and White version of the PS5 coming out on sale.</p>
                <a  className='text-white text-sm md:text-base  underline' href="">Shop Now</a>
              </div>
            </div>
            <div className=' w-[33%] flex flex-col gap-2  '>
              
              <div className=' bg-[#0D0D0D] px-2 w-[100%]  md:h-[46%] flex relative'>
                <div className='absolute bottom-1 w-[40%] '>
                <h1 className='text-white text-base font-semibold '> Women’s Collections</h1>
                <p className='text-white text-xs '>Featured woman collections that give you another vibe.</p>
                <a className='text-white text-sm underline' href="">Shop Now</a>
                </div>
              <img className='h-[100%] w-[100%] object-contain ' src={attractive_woman} alt="" />     
              </div>
              <div className=' flex flex-col md:flex-row gap-2 md:w-[100%] h-[51%]'>
              
              <div className=' bg-[#000000] min-w-[135px] w-[50%] flex relative px-1 '>
                <div className='absolute bottom-1 w-[70%]  '>
                <h1 className='text-white text-xs md:font-semibold '>Amazon wireless speakers </h1>
                <p className='text-white text-xs  '>GUCCI INTENSE OUD EDP</p>
                <a className='text-white text-xs nd:text-sm underline' href="">Shop Now</a>
                </div>
                <img className='h-[70%] w-[70%] object-contain mt-6 ml-8 ' src={amazon_gucci} alt="" />
              </div>
              
              <div className=' bg-[#000000] min-w-[135px] w-[50%] flex relative px-1 '>
               <div className='absolute bottom-1 w-[70%] '>
               <h1 className=' md:text-base text-white text-base font-semibold '> Speakers</h1>
                <p className='text-white text-xs  md:text-xs '>Amazon wireless speakers</p>
                <a className='text-white text-sm underline' href="">Shop Now</a>
               </div>
                <img className='h-[70%] w-[70%] object-contain mt-6 ml-8 ' src={amazon_png1} alt="" />
              </div>
              </div>
            </div>

          </div>
          <div className=' w-[100%] mt-32  container m-auto px-6  flex justify-around  '>
           
           <div className='  p-4 flex flex-col justify-around items-center'>
               <div className='w-[50px] h-[50px] flex justify-center items-center bg-gray-400  rounded-full'>
               <div className='w-[40px] h-[40px] flex justify-center items-center bg-black  rounded-full' >
                   <img  className='object-contain  h-[80%] w-[80%]' src={icon_shop} alt="" />
               </div>
               </div>
               <h2 className='font-semibold text-base md:text-xl'>FREE AND FAST DELIVERY </h2>
               <p className='text-xs'>Free delivery for all orders over $140</p>
           </div>
           <div className='   p-4 flex flex-col justify-around items-center'>
               <div className='w-[50px] h-[50px] flex justify-center items-center bg-gray-400  rounded-full'>
               <div className='w-[40px] h-[40px] flex justify-center items-center bg-black rounded-full' >
                   <img  className='object-contain  h-[80%] w-[80%]' src={icon_moneybag} alt="" />
               </div>
               </div>
               <h2 className='font-semibold text-base md:text-xl'>24/7 CUSTOMER SERVICE</h2>
               <p className='text-xs'>Friendly 24/7 customer support</p>
           </div>
           <div className='  p-4 flex flex-col justify-around items-center'>
               <div className='w-[50px] h-[50px] flex justify-center items-center bg-gray-400 rounded-full'>
               <div className='w-[40px] h-[40px] flex justify-center items-center bg-black rounded-full' >
                   <img  className='object-contain  h-[80%] w-[80%]' src={icon_shopping_bag} alt="" />
               </div>
               </div>
               <h2 className='font-semibold text-base md:text-xl'>MONEY BACK GUARANTEE</h2>
               <p className='text-xs'>We reurn money within 30 days</p>
           </div>
          
       </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage