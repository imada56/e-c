import React, { useContext, useState } from 'react';
import { AuthContext } from '../../ContexAuth/ContexAuth';
import { Link, useNavigate } from 'react-router-dom';

const Compts: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { currentUser, logout } = authContext || {}; // Destructure currentUser and logout

  const [error, setError] = useState<string>(''); // State for error handling
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError(''); // Clear any previous errors
    if (logout) {
      try {
        await logout(); // Call logout function from context if it exists
        navigate('/login'); // Navigate to login page after logout
      } catch (error) {
        setError('Failed to log out'); // Handle logout failure
      }
    }
  };

  return (
    <section className='min-h-[320px] mt-[140px]'>
      <div className='container m-auto w-[95%] md:w-[80%] flex flex-col gap-1'>
        <div className='flex justify-between items-center px-5'>
          <div className='font-extralight flex justify-around md:w-[80%] m-auto px-4 md:px-10 my-4'>
            <a className='hover:font-semibold' href='/'>Home</a><span> / </span>
            <a className='hover:font-semibold' href='/'>My Account</a>
          </div>
          <div>
            {currentUser && <span>Welcome! <a className='text-red-600' href='/'>{currentUser.email}</a></span>}
          </div>
        </div>
        <div className='w-[100%] max-h-[350px] flex gap-2'>
          <div className='w-[40%] h-[20%] px-2 flex flex-col gap-3'>
            <h1 className='text-base md:text-lg font-semibold'>Manage My Account</h1>
            <div className='px-2'>
              <p className='text-sm md:text-base hover:text-red-500 font-extralight'>My Profile</p>
              <p className='text-sm md:text-base hover:text-red-500 font-extralight'>Address Book</p>
              <p className='text-sm md:text-base hover:text-red-500 font-extralight'>My Payment Options</p>
            </div>
            <h1 className='text-base md:text-lg font-semibold'>My Orders</h1>
            <div className='px-2'>
              <p className='text-sm md:text-base hover:text-red-500 font-extralight'>My Returns</p>
              <p className='text-sm md:text-base hover:text-red-500 font-extralight'>My Cancellations</p>
            </div>
            <h1 className='text-base md:text-lg font-semibold'>My WishList</h1>
          </div>
          <div className='w-[60%] flex flex-col gap-2 border-2 px-5 py-2'>
            <h1 className='h-[10%] text-red-500 font-semibold text-xl'>Edit Your Profile</h1>
            <div className='h-[40%] w-[100%] grid grid-cols-2 gap-x-1 gap-y-1'>
              <label className='font-semibold text-sm md:text-base' htmlFor='firstName'>First Name</label>
              <label className='font-semibold text-sm md:text-base' htmlFor='lastName'>Last Name</label>
              <input id='firstName' className='px-2 bg-[#F5F5F5] w-[80%] text-sm md:text-base' type='text' placeholder='Md *' />
              <input id='lastName' className='px-2 bg-[#F5F5F5] w-[80%] text-sm md:text-base' type='text' placeholder='Rimel' />
              <label className='font-semibold text-sm md:text-base' htmlFor='email'>Email</label>
              <label className='font-semibold text-sm md:text-base' htmlFor='address'>Address</label>
              <input id='email' className='px-2 bg-[#F5F5F5] w-[80%] text-sm md:text-base' type='email' placeholder='rimel1111@gmail.com *' />
              <input id='address' className='px-2 bg-[#F5F5F5] w-[80%] text-sm md:text-base' type='text' placeholder='Kingston, 5236, United State' />
            </div>
            <label className='h-[8%] font-semibold text-sm md:text-base' htmlFor='password'>Password Changes</label>
            <input id='password' className='h-[8%] px-2 bg-[#F5F5F5] w-[100%] text-sm md:text-base' type='password' placeholder='Current Password' />
            <input className='h-[8%] px-2 bg-[#F5F5F5] w-[100%] text-sm md:text-base' type='password' placeholder='New Password' />
            <input className='h-[8%] px-2 bg-[#F5F5F5] w-[100%] text-sm md:text-base' type='password' placeholder='Confirm New Password' />
            <div className='h-[15%] mt-2 flex gap-3 justify-end'>
              <button className='md:w-[20%] mx-2 text-sm md:text-base px-2 py-2 border-2 text-black'>
                Cancel
              </button>
              <button className='md:w-[40%] mx-2 text-sm md:text-base px-2 py-2 border-2 text-white bg-red-500' onClick={handleLogout}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compts;
