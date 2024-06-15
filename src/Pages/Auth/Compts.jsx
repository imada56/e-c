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
    <section className='min-h-[320px] mt-[140px]'>
     <div className='container m-auto w-[95%] md:w-[80%] flex flex-col gap-1 '> 
         <div className=' flex justify-between items-center  px-5'>
             <div className='font-extralight  felx  justify-around md:w-[80%] m-auto px-4 md:px-10 my-4'>
                <a className='hover:font-semibold' href="">Home </a><span> / </span>
                <a className='hover:font-semibold' href="">My Account</a>
             </div>
             <div>
                <span>Welcome! <a className='text-red-600' href="">Md Rimel</a></span>
             </div>

         </div>
         <div className=' w-[100%] max-h-[350px] flex gap-2'>
             <div className='w-[40%] h-[20%] px-2 flex flex-col gap-3'>
                   <h1 className='text-base md:text-lg font-semibold'>Manage My Account</h1>
                     <div className=' px-2'>
                        <p className='text-sm md:text-base hover:text-red-500 font-extralight'>My Profile</p>
                        <p className='text-sm md:text-base hover:text-red-500 font-extralight'>Address Book</p>
                        <p className='text-sm md:text-base hover:text-red-500 font-extralight'>My Payment Options</p>
                     </div>
                     <h1 className='text-base md:text-lg font-semibold'>My Orders</h1>
                     <div className=' px-2'>
                        <p className='text-sm md:text-base hover:text-red-500 font-extralight'>My Returns</p>
                        <p className='text-sm md:text-base hover:text-red-500 font-extralight'>My Cancellations</p>
                     </div>
                     <h1 className='text-base md:text-lg font-semibold'>My WishList</h1>

             </div>
             <div className='w-[60%] flex flex-col gap-2 border-2 px-5 py-2  '>
                  <h1 className='h-[10%] text-red-500 font-semibold text-xl'>Edit Your Profile</h1>
                  <div className='h-[40%] w-[100%] grid grid-cols-2 gap-x-1 gap-y-1'>
                  <label className='font-semibold text-sm md:text-base' htmlFor="">First Name</label>
                  <label className='font-semibold text-sm md:text-base' htmlFor="">Last Name</label>
                  <input className='px-2 bg-[#F5F5F5] w-[80%] text-sm md:text-base' type="text" placeholder='Md *'  />
                  <input className='px-2 bg-[#F5F5F5] w-[80%] text-sm md:text-base' type="text" placeholder='Rimel'  />
                  <label className='font-semibold text-sm md:text-base' htmlFor="">Email</label>
                  <label className='font-semibold text-sm md:text-base' htmlFor="">Address</label>
                  <input className='px-2 bg-[#F5F5F5] w-[80%] text-sm md:text-base' type="email" placeholder='rimel1111@gmail.com *'  />
                  <input className='px-2 bg-[#F5F5F5] w-[80%] text-sm md:text-base' type="text" placeholder='Kingston, 5236, United State'  />
                  </div>
                  <label className='h-[8%] font-semibold text-sm md:text-base' htmlFor="">Password Changes</label>
                  <input className='h-[8%] px-2 bg-[#F5F5F5] w-[100%] text-sm md:text-base' type="password" placeholder='Current Passwod'  />
                  <input className='h-[8%] px-2 bg-[#F5F5F5] w-[100%] text-sm md:text-base' type="password" placeholder='New Passwod'  />
                  <input className='h-[8%] px-2 bg-[#F5F5F5] w-[100%] text-sm md:text-base' type="password" placeholder='Confirm New Passwod'  />
                 <div className='h-[15%] mt-2 flex gap-3 justify-end'>
                  <button 
                      className='md:w-[20%] mx-2 text-sm md:text-base px-2 py-2 border-2 text-black '> 
                    Cancel
                  </button>
                  <button 
                      className='md:w-[40%] mx-2 text-sm md:text-base px-2 py-2 border-2 text-white  bg-red-500'> 
                    Save Changes
                  </button>
                 </div>
             </div>
         </div>
     </div>
    </section>
    // <div className='container  pt-24 mt-[140px]'>
    //     <div className='m-auto w-[40%] h-48 border-2 text-center '>
    //         <h2 className='font-semibold py-5  text-xl my-4'>Profile</h2>
    //         {error && <h3 className='text-red-500'>{error}</h3>}
    //          <strong className='my-2'>Email : </strong>{currentUser && currentUser.email}
    //          <br />
    //          <Link className='  text-blue-300  underline ' to='/update'>Update Profile </Link>
    //     </div>
    //     <div className='text-center mt-2'>
    //         <button className=' bg-red-600 p-2 '
    //          onClick={handleLodout}>
    //             Log out
    //          </button>
    //     </div>
    // </div>
  )
}

export default Compts