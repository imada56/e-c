import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContexAuth/ContexAuth';
import dlbeatsnoop from '../../Assets/Images/dl.beatsnoop 1.png';
import { FaGoogle } from 'react-icons/fa';

function NouvelleInscription() {
  const authContext = useContext(AuthContext);
  const { signup } = authContext || {};

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate password match
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);

      // Ensure all refs have values before accessing .value
      if (signup && emailRef.current?.value && passwordRef.current?.value && confirmPasswordRef.current?.value) {
        await signup(emailRef.current.value, passwordRef.current.value);
        emailRef.current.value = '';
        passwordRef.current.value = '';
        confirmPasswordRef.current.value = '';
        navigate('/compts');
      }
    } catch {
      setError('Failed to create an account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='min-h-[320px] mt-[140px]'>
      <div className='w-[80%] h-[400px] container m-auto relative bg-[#FFFFFF] flex gap-2'>
        <div className='md:w-[65%]'>
          <img className='h-[100%]' src={dlbeatsnoop} alt='Beatsnoop' />
        </div>
        <div className='md:w-[35%] md:static absolute'>
          <form className='container m-auto mt-24 h-64 w-96 flex flex-col justify-around items-center ' onSubmit={handleSubmit}>
            <label htmlFor='' className='font-medium text-black text-2xl'>
              Nouveau Compte
            </label>
            {error && <h1 className='text-red-500'>{error}</h1>}
            <input ref={emailRef} className='h-7 w-[80%] cursor-text text-center border-black border-b-2' type='email' placeholder='Email' />
            <input ref={passwordRef} className='h-7 w-[80%] cursor-text text-center border-black border-b-2' type='password' placeholder='Mot De Passe' />
            <input ref={confirmPasswordRef} className='h-7 w-[80%] cursor-text text-center border-black border-b-2' type='password' placeholder='Confirme le Mot De Passe' />
            <button type='submit' disabled={loading} className='py-2 w-[80%] text-white bg-red-600 cursor-pointer border-2 px-2'>
              S'inscrire
            </button>
            <button type='button' disabled={loading} className='py-2 w-[80%] text-black text-sm cursor-pointer border-2 px-2'>
              <FaGoogle className='text-lg text-lime-600 inline-flex mr-2' /> S'inscrire avec Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NouvelleInscription;
