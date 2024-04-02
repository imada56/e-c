import React from 'react'
import {FaYoutube,FaFacebook,FaPhone,FaTwitter} from 'react-icons/fa'
function Footer() {
  return (
   <section className='mt-96 md:mt-52 lg:mt-32 flex justify-between'>
    <div className=' flex gap-2 text-sm font-thin'>
        <FaYoutube className=" text-red-600 mt-1"/>
        <FaFacebook className="  text-blue-950 mt-1"/>
        <FaTwitter className="  text-blue-400 mt-1"/>
        <p className=''>00211987748 </p>
        <FaPhone className="  text-gray-600 mt-1"/>     
    </div>
    <div className=' flex gap-2 font-thin text-xs text-gray-600 '>
        <p className=' '>L'entreprise résultante</p>
        <p className=' '>Contactez-nous ?</p>
        <p className=' '>Termes et Conditions</p>
    </div>
   </section>
  )
}

export default Footer