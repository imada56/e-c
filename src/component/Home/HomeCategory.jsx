import React, { useState } from 'react'
import CardCategory from '../Category/CardCategory'
import SubTitle from '../Uitily/SubTitle'
import { data } from '../../Data/ProduitData';
import { FaRandom } from 'react-icons/fa';

function HomeCategory() {
    const [tableau,serTableau]=useState(data);
  return (
    <section className=''>
        <SubTitle title={'Promontion'} btnTitle={'Ajouter'} path={'allCategoryPage'}/>
    <div className=' mt-3 p-2 border-2  grid items-center gap-2   grid-cols-2  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 '>
        {tableau.map((i)=>(
        <CardCategory  key={i.id}  background={i.bg} img={i.imgs} title={`Promontion`}/>
                      ))}
    </div>
    
    </section>
  )
}

export default HomeCategory