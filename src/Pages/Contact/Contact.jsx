import React from 'react'

function Contact() {
  return (
    <section className='min-h-[320px] mt-[140px]' >
<div className='container m-auto w-[80%] flex flex-col gap-1 '>
      <div className='font-extralight  felx  justify-around md:w-[80%] m-auto px-4 md:px-10 my-6'>
        <a className='hover:font-semibold' href="">Home </a><span> / </span>
        <a className='hover:font-semibold' href="">Contact</a>
      </div>
    <div className=' flex flex-col md:flex-row gap-5 md:justify-around'>
        <div className='md:w-[30%] flex md:flex-col gap-4 justify-center  px-6 border-2'> 
            <div className='border-r-2 md:border-r-white md:border-b-2 border-black flex flex-col gap-3 px-3 py-3 md:py-3'>
            <div className='h-4 w-4 rounded-full bg-red-500'></div>
            <h1 className='font-semibold text-lg md:text-xl'>Call To Us</h1>
            <p className='text-xs md:text-sm'>We are available 24/7, 7 days a week.</p>
            <p className='text-xs md:text-sm'>Phone: +8801611112222</p>
            </div>
            <div className='flex flex-col gap-3 px-3 py-3 md:py-3 '>
            <div className='h-4 w-4 rounded-full bg-red-500'></div>
            <h1 className='font-semibold text-lg md:text-xl'>Write To US</h1>
            <p className='text-xs md:text-sm'>Fill out our form and we will contact you within 24 hours.</p>
            <p className='text-xs md:text-sm'>Emails: customer@exclusive.com</p>
            <p className='text-xs md:text-sm'>Emails: support@exclusive.com</p>
            </div>
        </div>
        <div className='md:w-[60%] flex flex-col items-center  py-5 gap-6 border-2'>
          <div className=' flex justify-around px-3'>
            <input className='bg-[#F5F5F5] w-[25%]' type="text" placeholder='Your Name *'  />
            <input className='bg-[#F5F5F5] w-[25%]' type="text" placeholder='Your Email *'  />
            <input className='bg-[#F5F5F5] w-[25%]' type="text" placeholder='Your Phone *'  />
          </div>
          <div className=' text-center w-[100%]'>
          <input className='bg-[#F5F5F5] min-h-[200px] w-[90%]  px-4' type="text" placeholder='Your Massage '  />
          </div>
          <div className=' w-[80%] text-end '>
          <button 
          className='md:w-[40%] mx-2 text-sm md:text-base px-2 py-2 border-2 text-white  bg-red-500'> 
          Apply Coupon
          </button>
          </div>
        </div>
    </div>
</div>
    </section>
  )
}

export default Contact