import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <section className='min-h-[320px]'>

<div className='container m-auto mt-24 bg-gray-950 h-64 w-96 flex flex-col justify-around items-center '>
  <label htmlFor="" className='font-medium text-white text-2xl '>Se connecter</label>
    <input className=' h-7 w-[80%] cursor-text text-center'type="email" placeholder=' Email ' />
    <input className='  h-7 w-[80%] cursor-text text-center' type="text" placeholder='Mot De Passe'/>
    <samp className=' text-white cursor-pointer border-2 px-2 border-white rounded-lg'>connecter</samp>
    <label className=' font-extralight text-white text-xs '>Vous n'avez pas de compte ? </label>
    <Link className='text-red-600 underline font-serif cursor-pointer' to={'/NouvelleInscription'}>Cliquez ici
    </Link>
    
    
    
    
</div>

    </section>
  )
}

export default Login