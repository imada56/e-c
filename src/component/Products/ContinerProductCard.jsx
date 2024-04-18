import React, { useState } from 'react'
import ProductCard from './ProductCard'
//import p10 from '../../Assets/Images/p10.jpg'
import SubTitle from '../Uitily/SubTitle'
import { DataProduit } from '../../Data/ProduitData';

function ContinerProductCard({tb,Produits,Ajouter,y}) {
  //const [tableau,serTableau]=useState(DataProduit);

  return (
    <section>
     <SubTitle title={Produits} btnTitle={Ajouter} path={'allProductsPage'}/>
     <div className=' container m-auto py-6 pl-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                      {tb.map((i)=>(
                        
                        y ?(
                          
                          <ProductCard key={i.id} imgs={i.imgs}/>
                            ): 
                            (i.id< 5 ? ( 
                          <ProductCard key={i.id} imgs={i.imgs}/>
                          ):null
                          )
                      ))}
     </div>

    </section>
  )
}

export default ContinerProductCard