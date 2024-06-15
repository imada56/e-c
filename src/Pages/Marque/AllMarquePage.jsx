import React from 'react'
import AllMarque from '../../component/Marque/AllMarque'
import ContinerMarqueCard from '../../component/Marque/ContinerMarqueCard'
import Pagination from '../../component/Uitily/Pagination'

function AllMarquePage({categorie,data,tb,fct}) {
    const onFilter =(cat)=>{
        fct(cat)
       }
     
  return (
    <div className='min-h-screen mt-[140px]'>
    <AllMarque categorie={categorie} fct={onFilter}/>
    {/* <NmbrProduitSearch/> */}
    <div className='m-5 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 grid-flow-row-dense'>
       <div className='sm:col-span-2 md:col-span-4 lg:col-span-6'>
         <ContinerMarqueCard tb={tb}  Produits={''} Ajouter={''} y={'ga3'}/>
         </div>
    </div>
   <Pagination className='mt-72'/> 
    <h1 className='w-[85%]  bg-teal-400'>hbb {data}</h1> 
</div>
  )
}

export default AllMarquePage