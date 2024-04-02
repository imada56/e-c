import React from 'react'
import AllCategory from '../../component/Products/AllCategory'
import NmbrProduitSearch from '../../component/Uitily/NmbrProduitSearch'
import Pagination from '../../component/Uitily/Pagination'
import ContinerProductCard from '../../component/Products/ContinerProductCard'

function AllProductsPage() {
  return (
    <div className='min-h-screen'>
         <AllCategory/>
         <NmbrProduitSearch/>
         <div className='m-5 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 grid-flow-row-dense'>
            <div className='sm:col-span-2 md:col-span-4 lg:col-span-6'><ContinerProductCard  Produits={''} Ajouter={''}/></div>
            <div className='text-center'> 
              <p className='font-medium'>Catégorie </p>
              <input type="checkbox"  value=''/>Touts
              <br />
              <input type="checkbox"  value=''/>Touts
              <br />
              <input type="checkbox"  value=''/>Touts
              <br />
              <p className='font-medium'>Marque</p>
              <input type="checkbox"  value=''/>Touts
              <br />
              <input type="checkbox"  value=''/>Touts
              <br />
              <input type="checkbox"  value=''/>Touts
              <br />
              <p className='font-medium'>Prix </p>
              <input type="checkbox"  value=''/>Touts
              <br />
              <input type="checkbox"  value=''/>Touts
              <br />
              <input type="checkbox"  value=''/>Touts
              <br />
            </div>
         </div>
         <Pagination/>
    </div>
  )
}

export default AllProductsPage