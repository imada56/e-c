import React, { useState } from 'react'
import MarqueCard from './MarqueCard'
import SubTitle from '../Uitily/SubTitle'
import { DataMarque } from '../../Data/ProduitData';

function ContinerMarqueCard({Produits,Ajouter}) {
  const [tableau,serTableau]=useState(DataMarque);
  return (
    <section className='container m-auto'>
    <SubTitle title={Produits} btnTitle={Ajouter}/>
    <div className='h-7 border-t-2 p-5 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5   '>
     
    {tableau.map((i)=>(
       i.id< 6 ? (
        <MarqueCard  key={i.id}  background={i.bg} img={i.imgs} title={`Promontion`}/>
        ):null
        
                      ))}
    {/* <MarqueCard img={'m-condor.png'}/>
    <MarqueCard img={'m-Samsung.jpg'}/>
    <MarqueCard img={'m-lg.jpg'}/>
    <MarqueCard img={'m-Dell.gif'}/>
    <MarqueCard img={'m-Samsung.jpg'}/> */}
    </div>
    </section>
  )
}

export default ContinerMarqueCard