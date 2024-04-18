import React, { useContext, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../ContexAuth/ContexAuth';



function ForgotPassword() {
const resetePassword = useContext(AuthContext).resetePassword;
//const {currentUser} =useAuth();
const [error ,setError]=useState("");
const [loading,setLoading]=useState(false)
const [msg,setMsg]=useState('')
const emailRef=useRef()

const handleSubmit = async(e)=>{
  e.preventDefault()
  try{
     setError('');
     setLoading(true);
     await resetePassword(emailRef.current.value);    
     setMsg('chek your inbox to get new password')
    }
  catch{
      setError('failed to resets password' )   
  }
    setLoading(false)
}


  return (
  <section className='container min-h-[320px]'>
    <form onSubmit={handleSubmit} className='container m-auto mt-24 border-2 border-sky-600 h-64 w-96 flex flex-col justify-around items-center '>
  <label htmlFor="" className='text-sky-900 font-medium  text-2xl '>Reset Passwoed</label>
   {error && <h1 className='text-red-500'>{error}</h1>}
   {msg && <div className= 'bg-fuchsia-500 p-3 text-purple-950'>{msg}</div>}
   
    <input ref={emailRef} className=' h-7 w-[80%] border-2 cursor-text text-center'type="email" placeholder=' Email ' />
    <button type='submit' disabled={loading} 
      className=' py-1 w-[80%] cursor-pointer border-2 px-2 text-white border-sky-600 rounded-lg bg-sky-600'>Reset Passwoed</button>
    <Link className='text-blue-300 underline font-serif cursor-pointer ' to={'/Login'}>Login
    </Link>
    <p>Need an acount <Link className='text-blue-300 underline font-serif cursor-pointer' to={'/NouvelleInscription'}>signup
    </Link></p>
</form>
  </section>)
}

export default ForgotPassword