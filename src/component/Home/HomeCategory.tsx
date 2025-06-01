import React, { useState } from 'react'
// import CardCategory from '../Category/CardCategory'
import SubTitle from '../Uitily/SubTitle'
import { DataCategoryHome} from '../../Data/ProduitData';
import CardCategory from '../Category/CardCategory';
import { Product} from '../../Firebase/types';

interface HomeCategoryProps {
  tb: Product[];
}
const HomeCategory : React.FC<HomeCategoryProps> = ({
  tb,
}) =>  {
    const [tableau,setTableau]=useState(DataCategoryHome);
      
    const tablePromontion = tb.filter(i=> typeof i.promontion==='number' && i.promontion>0)

    
  return (
    <section className=''>
        <SubTitle title={'Promotion'} btnTitle={'Add'} path={'allCategoryPage'}/>
    <div className=' mt-3 p-2 border-2  grid items-center gap-2   grid-cols-2  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 '>
        {tablePromontion.map((i)=>(
         
         parseInt(i.id) < 5 ? (
        <CardCategory  key={i.id} promotion={i.promontion} background={i.bg} img={i.imgs} title={`Promotion`}/>
             ):null        
                    ))}
    </div>
    
    </section>
  )
}

export default HomeCategory