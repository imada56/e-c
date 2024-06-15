import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../ContexAuth/ContexAuth';
import { useNavigate } from 'react-router-dom'; 
import dlbeatsnoop  from '../../Assets/Images/dl.beatsnoop 1.png'
import {FaGoogle,FaGoogleDrive}from 'react-icons/fa'

function NouvelleInscription() {
const signup = useContext(AuthContext).singup;
 //const {currentUser} =useAuth();
 const [error ,setError]=useState("");
 const [loading,setLoading]=useState(false)
 const emailRef=useRef()
 const passwordRef=useRef()
 const confirmPasswordRef=useRef()
 const navigate =useNavigate()
  const handleSubmit = async(e)=>{
        
        e.preventDefault()
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
          return setError('failed to create a compt uuuuuuu' )
        }
        try{
           setError('');
           setLoading(true);
           //console.log('.....................');
           //console.log(signup);
           await signup(emailRef.current.value ,passwordRef.current.value);   
           emailRef.current.value='' ;
           passwordRef.current.value='';
           confirmPasswordRef.current.value='';
           navigate('/compts')
           
          }
        catch{
            setError('failed to create a compt' )
            console.log('imadouuuuuuuuu2222222222222')
        }
          setLoading(false)
  }
  return (
    <section className='min-h-[320px] mt-[140px]' >
 <div className='w-[80%] h-[400px]  container m-auto relative bg-[#FFFFFF] flex gap-2'>
 <div className='md:w-[65%]'>
    <img className='h-[100%] ' src={dlbeatsnoop} alt="" />
    {/* <div className='h-[55%]  '>
      <img className='h-full ml-7 w-fit ' src={imgs}/>
    </div> */}
  </div>
  <div className='md:w-[35%] md:static absolute'>
  <form className='container m-auto mt-24 h-64 w-96 flex flex-col justify-around items-center ' onSubmit={handleSubmit}>
  <label htmlFor="" className='font-medium text-black  text-2xl '>Nv Compte</label>
   {error && <h1 className='text-red-500'>{error}</h1>}
    <input ref={emailRef}className=' h-7 w-[80%] cursor-text text-center border-black border-b-2 'type="email" placeholder=' Email ' />
    <input ref={passwordRef} className='  h-7 w-[80%] cursor-text text-center border-black border-b-2 ' type="password" placeholder='Mot De Passe'/>
    <input ref={confirmPasswordRef} className='  h-7 w-[80%] cursor-text text-center border-black border-b-2 ' type="password" placeholder='Confirme le Mot De Passe'/>
    <button type='submit' disabled={loading} className='py-2 w-[80%] text-white bg-red-600 cursor-pointer border-2 px-2 '  >Inscrit
    </button>
    <button type='submit' disabled={loading} className='py-2 w-[80%] text-black text-sm cursor-pointer border-2 px-2 '  >
    <FaGoogle className='text-lg text-lime-600 inline-flex mr-2'/>  Sign up with Google
      
    </button>
  </form>
  </div>
 </div>


    </section>
  )
}

export default NouvelleInscription