import React, { useState } from 'react'
import { data } from '../../Data/ProduitData';
import CardCategory from '../../component/Category/CardCategory';
import Pagination from '../../component/Uitily/Pagination';

function AllCategoryPage() {
  const [tableau,serTableau]=useState(data);
  return (
    <section className='container min-h-[420px]'>
    <div className='w-[80%] m-auto mt-20'>

 
    
<div className=' mt-3 p-2 border-2  grid items-center gap-2   grid-cols-3  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
    {tableau.map((i)=>(
    <CardCategory  key={i.id}  background={i.bg} img={i.imgs} title={`Promontion`}/>
                  ))}
                  {tableau.map((i)=>(
    <CardCategory  key={i.id}  background={i.bg} img={i.imgs} title={`Promontion`}/>
                  ))}
                   {tableau.map((i)=>(
    <CardCategory  key={i.id}  background={i.bg} img={i.imgs} title={`Promontion`}/>
                  ))}
</div>
<Pagination/>

</div>

</section>
  )
}

export default AllCategoryPage