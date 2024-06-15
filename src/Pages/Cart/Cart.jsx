import React from 'react'
import img63  from '../../Assets/Images/image 63.png'
import { Link } from 'react-router-dom'
import g3 from '../../Assets/Images/g3.png'
import g4  from '../../Assets/Images/g4.png'
function Cart() {
  return (
    <section className='min-h-[320px] mt-[140px]'>
        <div className=' container m-auto flex flex-col gap-2 w-[70%]  border-2 p-2'>
           
            <div className='  '>
                
            <div className=' flex justify-around items-center  shadow-sm mb-2 shadow-slate-500'>
                <p>Product</p>
                <p>Prix</p>
                <p>Quqntite</p>
                <p>Subtotal</p>
            </div>


           <div className='w-[100%] h-36  overflow-auto  flex flex-col gap-2'>
           <div className=' flex justify-around items-center  w-[100%] shadow-sm mb-2 shadow-slate-500  '>
                <div className=' flex flex-col md:flex-row gap-2 items-center mr-6  w-[9%] md:w-[7%] '>
                <img className=' object-contain h-[20%] ' src={g4} alt="" />
                 <p className='text-xs md:text-base '>Product</p>
                 </div>
                <p className=' text-sm md:text-base '>$380</p>
                <div className='w-[10%]  text-center'>
                    <input className=' border-2 w-9 md:w-12 px-1' placeholder='2' type="number" name="" id="" /></div>
                <p className='text-sm md:text-base'>#390</p>
            </div> 
            <div className=' flex justify-around items-center  w-[100%] shadow-sm mb-2 shadow-slate-500  '>
                <div className=' flex flex-col md:flex-row gap-2 items-center mr-6  w-[9%] md:w-[7%] '>
                <img className=' object-contain h-[20%] ' src={g3} alt="" />
                 <p className='text-xs md:text-base '>Product</p>
                 </div>
                <p className=' text-sm md:text-base '>$380</p>
                <div className='w-[10%]  text-center'>
                    <input className=' border-2 w-9 md:w-12 px-1' placeholder='2' type="number" name="" id="" /></div>
                <p className='text-sm md:text-base'>#390</p>
            </div>
            <div className=' flex justify-around items-center  w-[100%] shadow-sm mb-2 shadow-slate-500  '>
                <div className=' flex flex-col md:flex-row gap-2 items-center mr-6  w-[9%] md:w-[7%] '>
                <img className=' object-contain h-[20%] ' src={g4} alt="" />
                 <p className='text-xs md:text-base '>Product</p>
                 </div>
                <p className=' text-sm md:text-base '>$380</p>
                <div className='w-[10%]  text-center'>
                    <input className=' border-2 w-9 md:w-12 px-1' placeholder='2' type="number" name="" id="" /></div>
                <p className='text-sm md:text-base'>#390</p>
            </div>
            <div className=' flex justify-around items-center  w-[100%] shadow-sm mb-2 shadow-slate-500  '>
                <div className=' flex flex-col md:flex-row gap-2 items-center mr-6  w-[9%] md:w-[7%] '>
                <img className=' object-contain h-[20%] ' src={img63} alt="" />
                 <p className='text-xs md:text-base '>Product</p>
                 </div>
                <p className=' text-sm md:text-base '>$380</p>
                <div className='w-[10%]  text-center'>
                    <input className=' border-2 w-9 md:w-12 px-1' placeholder='2' type="number" name="" id="" /></div>
                <p className='text-sm md:text-base'>#390</p>
            </div>
           
           </div>


            
            </div>



            <div className='h-[50%] md:h-[45%] pt-2 flex flex-col gap-5 md:flex-row px-2 md:justify-between '>
            <div className=' md:h-[15%] flex justify-between md:w-[35%]'>
                <input type="search" className='border-2 px-3' name="" id="" placeholder='Coupon Code'/>
                <button className=' px-2 py-2 border-2 text-white  bg-red-500'> Apply Coupon</button>
            </div>
            <div className='border-2 flex flex-col gap-4  items-center  md:h-[90%] md:w-[40%]  px-4 py-2'>
               <h2 className=''>Cart Total</h2>
               <div className='flex justify-between w-[100%] px-2  border-b-2 border-black'>
                <p>Subtotal</p>
                <p>#1750</p>
               </div>
               <div className='flex justify-between  w-[100%] px-2 border-b-2 border-black'>
                <p>Shipping:</p>
                <p>#1850</p>
               </div>
               <div className='flex justify-between w-[100%] px-2 '>
                <p>Total:</p>
                <p>#6666</p>
               </div>
               <Link className='' to={'/checkOut'}> 
               <button className=' px-2 py-2 border-2 text-white bg-red-500 w-[70%]'>Procees to checkout</button>
               </Link>          
            </div>
         </div>
        </div>

    </section>
  )
}

export default Cart