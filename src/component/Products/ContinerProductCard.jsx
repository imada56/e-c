import React, { useState } from 'react'
import ProductCard from './ProductCard'
import p10 from '../../Assets/Images/p10.jpg'
import SubTitle from '../Uitily/SubTitle'
import { data } from '../../Data/ProduitData';
function ContinerProductCard({Produits,Ajouter}) {
  const [tableau,serTableau]=useState(data);
  return (
    <section>
     <SubTitle title={Produits} btnTitle={Ajouter} path={'allProductsPage'}/>
     <div className=' container m-auto py-6 pl-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                      {tableau.map((i)=>(
                      <ProductCard key={i.id} imgs={p10}/>
                        ))}
     </div>

    </section>
  )
}

export default ContinerProductCard