import React, { useContext, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../ContexAuth/ContexAuth';
import dlbeatsnoop  from '../../Assets/Images/dl.beatsnoop 1.png'


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
  <section className='container min-h-[320px] mt-[140px]'>
  <div className='w-[80%] h-[400px]  container m-auto relative bg-[#FFFFFF] flex gap-2'>
  <div className='md:w-[65%]'>
  <img className='h-[100%] ' src={dlbeatsnoop} alt="" />
  </div>
  <div  className='md:w-[35%] md:static absolute'>
  <form onSubmit={handleSubmit} className='container m-auto mt-24 h-64 w-96 flex flex-col justify-around items-center '>
  <label htmlFor="" className='text-black font-medium  text-2xl '>Reset Passwoed</label>
   {error && <h1 className='text-red-500'>{error}</h1>}
   {msg && <div className= 'bg-fuchsia-500 p-3 text-purple-950'>{msg}</div>}
   
    <input ref={emailRef} className=' h-7 w-[80%] cursor-text text-center border-black border-b-2 'type="email" placeholder=' Email ' />
    <button type='submit' disabled={loading} 
      className=' py-2 w-[80%] text-white bg-red-600 cursor-pointer border-2 px-2'>Reset Passwoed</button>
    <Link className='text-blue-300 underline font-serif cursor-pointer  ' to={'/Login'}>Login
    </Link>
    <p>Need an acount <Link className='text-red-600  underline font-serif cursor-pointer' to={'/NouvelleInscription'}>signup
    </Link></p>
</form>
  </div>
  </div>
  </section>)
}

export default ForgotPassword