import React from 'react'

function NevSearch() {
  return (
    <section>
    <header className='bg-gray-600'>
      <div className='container'>
         <div className='h-20 flex justify-around items-center px-6'>
            <a href="" className='underline text-white'>New Resteron </a>
            <div >
              <input className='w-[200px] sm:w-[300px] md:w-[450px] lg:w-[750px]' type="text"/>
            </div>
            <div className=''>
            <a href="" className='mx-5 underline text-white'>Home</a>
            <a href="" className='underline text-white'>Char </a>
            </div>

         </div>
      </div>
  </header>

</section>
  )
}

export default NevSearch