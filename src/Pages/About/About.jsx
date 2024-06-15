import React from 'react'
import about  from '../../Assets/Images/about.png'
import v1  from '../../Assets/Images/vector/Vector1.png'
import v2  from '../../Assets/Images/vector/Vector2.png'
import v3  from '../../Assets/Images/vector/Vector3.png'
import icon_shop  from '../../Assets/Images/vector/icon_shop.png'
import icon_moneybag from '../../Assets/Images/vector/Icon-Moneybag.png'
import icon_shopping_bag  from '../../Assets/Images/vector/Icon-Shopping bag.png'
import profil1  from '../../Assets/Images/profil1.png'
import profil2  from '../../Assets/Images/profil2.png'
import profil3  from '../../Assets/Images/profil3.png'
import {FaDog ,FaInstagram,FaFacebook,FaTwitter}from 'react-icons/fa'
function About() {
  return (
    <section className='min-h-[320px] mt-[140px]'>
      <div className='flex flex-col gap-20 h-fit'>
      <div className=' w-[70%]   container m-auto mb-6'> 
    <a href="">Home </a><span> / </span>
    <a href="">About </a>
        </div>
        <div className='px-2  flex flex-col md:flex-row md:justify-end items-center min-h-[200px] md:h-[370px] gap-5  md:gap-24'>
            <div className='w-[90%] md:w-[30%]'>
                <h1 className='font-bold text-3xl mb-6'>Our Story</h1>
                <p className='mb-3'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className='  h-[100%] '>
               <img className='h-[100%]  object-contain' src={about} alt="" />
            </div>
        </div>

        <div className=' w-[70%]   container m-auto px-6  grid grid-cols-2 md:grid-cols-4 justify-around gap-x-10 gap-y-2 '>
            <div className=' hover:text-white hover:bg-red-500 border-2 border-black p-4 flex flex-col justify-around items-center'>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-gray-400 hover:bg-white rounded-full'>
                <div className='relative text-sm w-[30px] h-[30px] flex justify-center   bg-white items-center rounded-full' >
                    <img className='absolute ' src={v1} alt="" />
                    <img className='absolute ' src={v2} alt="" />
                    <img className='absolute ' src={v3} alt="" />
                </div>
                </div>
                <h2 className='font-semibold text-xl '>25k </h2>
                <p className='text-xs '>Anual gross sale in our site</p>
            </div>
            <div className=' hover:text-white hover:bg-red-500 border-2 border-black p-4 flex flex-col justify-around items-center'>
                <div className='w-[50px] h-[50px] flex justify-center items-center bg-gray-400 hover:bg-white  rounded-full'>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-black hover:bg-red-600 rounded-full' >
                    <img  className='object-contain  h-[80%] w-[80%]' src={icon_shop} alt="" />
                </div>
                </div>
                <h2 className='font-semibold text-xl'>10.5k </h2>
                <p className='text-xs'>Sallers active our site</p>
            </div>
            <div className=' hover:text-white hover:bg-red-500 border-2 border-black p-4 flex flex-col justify-around items-center'>
                <div className='w-[50px] h-[50px] flex justify-center items-center bg-gray-400 hover:bg-white rounded-full'>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-black hover:bg-red-600 rounded-full' >
                    <img  className='object-contain  h-[80%] w-[80%]' src={icon_moneybag} alt="" />
                </div>
                </div>
                <h2 className='font-semibold text-xl'>33k </h2>
                <p className='text-xs'>Mopnthly Produduct Sale</p>
            </div>
            <div className=' hover:text-white hover:bg-red-500 border-2 border-black p-4 flex flex-col justify-around items-center'>
                <div className='w-[50px] h-[50px] flex justify-center items-center bg-gray-400 hover:bg-white  rounded-full'>
                <div className='w-[40px] h-[40px] flex justify-center items-center bg-black hover:bg-red-600 rounded-full' >
                    <img  className='object-contain  h-[80%] w-[80%]' src={icon_shopping_bag} alt="" />
                </div>
                </div>
                <h2 className='font-semibold text-xl'>45.5k </h2>
                <p className='text-xs'>Customer active in our site</p>
            </div>
           
        </div>
        <div className='   px-16 grid grid-cols-1 md:grid-cols-3 justify-around '> 
            <div className='  flex flex-col items-center  h-[100%] '>
            <div className='bg-[#F5F5F5] flex justify-center w-[70%] h-[80%]'>
                <img className='object-fill h-full  ' src={profil1} alt="" /> 
                    </div>
                <div className=' w-[70%]  h-[20%]'>
                     <h1 className='font-semibold text-xl'>Container m-auto</h1>
                    <p className='font-extralight text-xs'>Founder & Chairman</p>
                    <div className=' flex gap-1 font-extralight text-xs'>
                        <FaInstagram/>
                        <FaFacebook/>
                        <FaTwitter/>
                    </div> 
                </div>
            </div>
            <div className='  flex flex-col items-center  h-[100%] '>
            <div className='bg-[#F5F5F5] flex justify-center w-[70%] h-[80%]'>
                <img className='object-fill h-full  ' src={profil3} alt="" /> 
                    </div>
                <div className=' w-[70%]  h-[20%]'>
                     <h1 className='font-semibold text-xl'>Container m-auto</h1>
                    <p className='font-extralight text-xs'>Founder & Chairman</p>
                    <div className=' flex gap-1 font-extralight text-xs'>
                        <FaInstagram/>
                        <FaFacebook/>
                        <FaTwitter/>
                    </div> 
                </div>
            </div>
            <div className='  flex flex-col items-center  h-[100%] '>
            <div className='bg-[#F5F5F5] flex justify-center w-[70%] h-[80%]'>
                <img className='object-fill h-full  ' src={profil2} alt="" /> 
                    </div>
                <div className=' w-[70%]  h-[20%]'>
                     <h1 className='font-semibold text-xl'>Container m-auto</h1>
                    <p className='font-extralight text-xs'>Founder & Chairman</p>
                    <div className=' flex gap-1 font-extralight text-xs'>
                        <FaInstagram/>
                        <FaFacebook/>
                        <FaTwitter/>
                    </div> 
                </div>
            </div>
        </div> 
        

        <div className=' w-[70%]   container m-auto px-6  flex justify-around  '>
           
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
    </section>
  )
}

export default About