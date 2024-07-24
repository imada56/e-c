import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContexAuth/ContexAuth';
import dlbeatsnoop from '../../Assets/Images/dl.beatsnoop 1.png';

function ForgotPassword() {
  const authContext = useContext(AuthContext);
  const { resetPassword } = authContext!;  // Assumed that resetePassword is always provided by AuthContext

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>('');
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailRef.current?.value) {
      setError('Email is required');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current!.value); // Call resetePassword with email value
      setMsg('Check your inbox to reset your password.');
    } catch (error) {
      setError('Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='container min-h-[320px] mt-[140px]'>
      <div className='w-[80%] h-[400px] container m-auto relative bg-[#FFFFFF] flex gap-2'>
        <div className='md:w-[65%]'>
          <img className='h-[100%] ' src={dlbeatsnoop} alt='' />
        </div>
        <div className='md:w-[35%] md:static absolute'>
          <form onSubmit={handleSubmit} className='container m-auto mt-24 h-64 w-96 flex flex-col justify-around items-center '>
            <label htmlFor='' className='text-black font-medium  text-2xl '>
              Reset Password
            </label>
            {error && <h1 className='text-red-500'>{error}</h1>}
            {msg && <div className='bg-fuchsia-500 p-3 text-purple-950'>{msg}</div>}

            <input
              ref={emailRef}
              className='h-7 w-[80%] cursor-text text-center border-black border-b-2 '
              type='email'
              placeholder='Email'
              required
            />
            <button
              type='submit'
              disabled={loading}
              className='py-2 w-[80%] text-white bg-red-600 cursor-pointer border-2 px-2'
            >
              {loading ? 'Loading...' : 'Reset Password'}
            </button>
            <Link className='text-blue-300 underline font-serif cursor-pointer  ' to={'/Login'}>
              Login
            </Link>
            <p>
              Need an account{' '}
              <Link className='text-red-600  underline font-serif cursor-pointer' to={'/NouvelleInscription'}>
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
