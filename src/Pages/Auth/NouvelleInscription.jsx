import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../ContexAuth/ContexAuth';
import { useNavigate } from 'react-router-dom'; 
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
    <section className='min-h-[320px]' >

<form className='container m-auto mt-24 border-2 border-sky-600 h-64 w-96 flex flex-col justify-around items-center ' onSubmit={handleSubmit}>
  <label htmlFor="" className='font-medium text-sky-800  text-2xl '>Nv Compte</label>
   {error && <h1 className='text-red-500'>{error}</h1>}
    <input ref={emailRef}className=' h-7 w-[80%] cursor-text text-center border-2'type="email" placeholder=' Email ' />
    <input ref={passwordRef} className='  h-7 w-[80%] cursor-text text-center border-2' type="password" placeholder='Mot De Passe'/>
    <input ref={confirmPasswordRef} className='  h-7 w-[80%] cursor-text text-center border-2' type="password" placeholder='Confirme le Mot De Passe'/>
    <button type='submit' disabled={loading} className='py-1 text-white bg-sky-600 cursor-pointer border-2 px-2 border-sky-500 rounded-lg' >Inscrit
    </button>
   
    
    
    
    
</form>

    </section>
  )
}

export default NouvelleInscription