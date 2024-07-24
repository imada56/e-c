import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContexAuth/ContexAuth';
import { useNavigate } from 'react-router-dom';

function UpdateProfil() {
  const authContext = useContext(AuthContext);
  const { currentUser, updateUserEmail, updateUserPassword } = authContext || {};

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const emailDefaultValue = currentUser?.email || ''; // Ensure a default value

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Password confirmation check
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      return setError('Passwords do not match');
    }

    setError('');
    setLoading(true);

    try {
      const promises = [];
      if (updateUserEmail && emailRef.current?.value !== currentUser?.email) {
        const emailValue = emailRef.current?.value; // Extract value to variable
        if (emailValue) { // Ensure value is not undefined
          promises.push(updateUserEmail(emailValue));
        }
      }
      if (updateUserPassword && passwordRef.current?.value) {
        promises.push(updateUserPassword(passwordRef.current.value));
      }

      await Promise.all(promises);
      navigate('/compts');
    } catch (error) {
      setError('Failed to update account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='min-h-[320px] mt-[140px]'>
      <form className='container m-auto mt-24 border-2 border-sky-600 h-64 w-96 flex flex-col justify-around items-center' onSubmit={handleSubmit}>
        <label htmlFor='' className='font-medium text-sky-800 text-2xl'>
          Update Profile
        </label>
        {error && <div className='bg-red-200 py-2 px-6 text-red-600'>{error}</div>}
        <input
          ref={emailRef}
          required
          defaultValue={emailDefaultValue}
          className='h-7 w-[80%] cursor-text text-center border-2'
          type='email'
          placeholder='Email'
        />
        <input
          ref={passwordRef}
          className='h-7 w-[80%] cursor-text text-center border-2'
          type='password'
          placeholder='Mot De Passe'
        />
        <input
          ref={confirmPasswordRef}
          className='h-7 w-[80%] cursor-text text-center border-2'
          type='password'
          placeholder='Confirme le Mot De Passe'
        />
        <button type='submit' disabled={loading} className='py-1 text-white bg-sky-600 cursor-pointer border-2 px-2 border-sky-500 rounded-lg'>
          Update
        </button>
      </form>
      <Link to='/compts'>
        <div className='w-80 m-auto p-1 bg-red-400 rounded-lg hover:bg-red-500 text-white text-center mt-2'>Cancel</div>
      </Link>
    </section>
  );
}

export default UpdateProfil;
