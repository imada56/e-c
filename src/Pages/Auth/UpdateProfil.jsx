import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../ContexAuth/ContexAuth';
import { useNavigate } from 'react-router-dom'; 
function UpdateProfil() {
    const currentUser = useContext(AuthContext).currentUser;
    const updateUserEmail = useContext(AuthContext).updateUserEmail;
    const updateUserPassword = useContext(AuthContext).updateUserPassword;
    const [error ,setError]=useState("");
    const [loading,setLoading]=useState(false)
    const emailRef=useRef()
    const passwordRef=useRef()
    const confirmPasswordRef=useRef()
    const navigate =useNavigate()
     const handleSubmit = (e)=>{
           e.preventDefault()
           if (passwordRef.current.value !== confirmPasswordRef.current.value) {
             return setError('Passwords do not match' )
           }
           
     const promises=[];
              setError('');
              setLoading(true);
              if(emailRef.current.value !== currentUser.email){
                promises.push(updateUserEmail(emailRef.current.value))
              }
              if(passwordRef.current.value){
                promises.push(updateUserPassword(passwordRef.current.value))
              }
              Promise.all(promises)
              .then(()=>{
                navigate('/compts');
              }).catch(()=>{
                setError('failed to update accounte' )
              }).finally(()=>{
                setLoading(false )
              })
     }
  return (
    <section className='min-h-[320px]' >

    <form className='container m-auto mt-24 border-2 border-sky-600 h-64 w-96 flex flex-col justify-around items-center ' onSubmit={handleSubmit}>
      <label htmlFor="" className='font-medium text-sky-800  text-2xl '>Updat Profil</label>
       {error && <div className='bg-red-200 py-2 px-6 text-red-600'>{error}</div>}
        <input 
        ref={emailRef} 
        required
        defaultValue={currentUser?.email}
         className=' h-7 w-[80%] cursor-text text-center border-2'type="email" placeholder=' Email ' />
        <input ref={passwordRef} className='  h-7 w-[80%] cursor-text text-center border-2' type="password" placeholder='Mot De Passe'/>
        <input ref={confirmPasswordRef} className='  h-7 w-[80%] cursor-text text-center border-2' type="password" placeholder='Confirme le Mot De Passe'/>
        <button type='submit' disabled={loading} className='py-1 text-white bg-sky-600 cursor-pointer border-2 px-2 border-sky-500 rounded-lg' >Update
        </button>
    </form>
    <Link to={'/compts'}><div className='w-80 m-auto p-1 bg-red-400 rounded-lg hover:bg-red-500 text-white text-center mt-2'>Cancel</div></Link>
        </section>
  )
}

export default UpdateProfil