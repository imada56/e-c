import React, { useContext, useState } from 'react'
import { AuthContext } from '../../ContexAuth/ContexAuth'
import { Link, useNavigate } from 'react-router-dom'

function Compts() {
    const currentUser =useContext(AuthContext).currentUser
    const [error,setError]=useState('');
    const logout =useContext(AuthContext).logout
    const navigate =useNavigate()
    const handleLodout =async()=>{
        setError('')
        try{
           await logout();
           navigate('/login')
        }catch{
              setError('Failed to log out')
        }
    }
   // console.log('wwwwww '+ currentUser)
  return (
    <div className='container  pt-24 '>
        <div className='m-auto w-[40%] h-48 border-2 text-center '>
            <h2 className='font-semibold py-5  text-xl my-4'>Profile</h2>
            {error && <h3 className='text-red-500'>{error}</h3>}
             <strong className='my-2'>Email : </strong>{currentUser && currentUser.email}
             <br />
             <Link className='  text-blue-300  underline ' to='/update'>Update Profile </Link>
        </div>
        <div className='text-center mt-2'>
            <button className=' bg-red-600 p-2 '
             onClick={handleLodout}>
                Log out
             </button>
        </div>
    </div>
  )
}

export default Compts