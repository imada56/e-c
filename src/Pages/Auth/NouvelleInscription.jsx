import React from 'react'
import { Link } from 'react-router-dom'

function NouvelleInscription() {
  return (
    <section className='min-h-[320px]'>

<div className='container m-auto mt-24 bg-green-500 h-64 w-96 flex flex-col justify-around items-center '>
  <label htmlFor="" className='font-medium text-white text-2xl '>Nv Compte</label>
    <input className=' h-7 w-[80%] cursor-text text-center'type="email" placeholder=' Email ' />
    <input className='  h-7 w-[80%] cursor-text text-center' type="text" placeholder='Mot De Passe'/>
    <input className='  h-7 w-[80%] cursor-text text-center' type="text" placeholder='Confirme le Mot De Passe'/>
    <Link className=' text-white cursor-pointer border-2 px-2 border-white rounded-lg' to={'/login'}>Inscrit
    </Link>
    
    
    
</div>

    </section>
  )
}

export default NouvelleInscription