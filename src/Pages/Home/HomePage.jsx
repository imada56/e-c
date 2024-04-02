import React from 'react'
import NevbarLogin from '../../component/Uitily/NevbarLogin'
import Slider from '../../component/Home/Slider'
import HomeCategory from '../../component/Home/HomeCategory'
import DivPublicite from '../../component/Home/DivPublicite'
import ContinerProductCard from '../../component/Products/ContinerProductCard'
import ContinerMarqueCard from '../../component/Marque/ContinerMarqueCard'
import Footer from '../../component/Uitily/Footer'

function HomePage() {
  return (
    <div className='' >
       
       <Slider/>
      <div className='w-[85%] container m-auto'>
       <HomeCategory/>
       <ContinerProductCard Produits={'Produits'} Ajouter={'Ajouter'}/>
       <ContinerProductCard Produits={'Le plus éloquent'} Ajouter={'Ajouter'}/>
       <DivPublicite/>
       <ContinerProductCard Produits={'Offre spéciale'} Ajouter={'Ajouter'}/>
       <ContinerMarqueCard Produits={'Marque'} Ajouter={'Ajouter'}/>
       
      </div>
      
    </div>
  )
}

export default HomePage