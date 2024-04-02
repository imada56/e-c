import React from 'react'

function DetailDuProduit({imgs}) {
  return (
    <section className='  container mt-28 w-[100%] '>
    <div className='w-[70%] mx-auto'>
    <div className='grid grid-cols-2 h-96 mt-7 p-3 pr-8 shadow-black shadow-lg rounded-xl bg-white  '>
        <div className='mr-10 h-[80%] md:h-[90%]  '>
          <img className='h-full  w-fit ' src={imgs}/>
        </div>
        
            
            <div className=' overflow-auto'>
            <p className='pl-2 font-serif text-black'>Lnt exercitationem magnam eaque. Alias error iste nihil inventore aliquam. Delectus, numquam sapiente. Sequi totam minima laborum. Quae eum eius magnam nam vero, incidunt ipsum rerum facere sequi atque maxime exercitationem voluptatibus reprehenderit mollitia consequatur aut eligendi optio? Inventore quisquam impedit harum dolorem dolor molestias, facere accusantium quos vitae laboriosam iure ea totam. Saepe earum fugit enim explicabo nemo quis culpa autem doloremque, rerum labore debitis non tenetur sit consequuntur provident nostrum dolorem ratione deserunt aliquid veniam est reprehenderit iure. Tempore dicta veritatis impedit commodi ipsa eligendi consectetur.
            </p>
            </div>
            
        
    </div>
</div>
</section>
  )
}

export default DetailDuProduit