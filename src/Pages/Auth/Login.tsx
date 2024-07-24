import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext} from '../../ContexAuth/ContexAuth'; // Adjust the import path and interface as per your actual implementation
import dlbeatsnoopImage from '../../Assets/Images/dl.beatsnoop 1.png';
 
interface LoginProps {
  imgs:string
}

const Login: React.FC<LoginProps>=({imgs})=> {
  const authContext = useContext(AuthContext); // Retrieve the context value
  const { login } = authContext || {}; // Destructure login from authContext or default to empty object
  const [error ,setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/compts';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      if (emailRef.current && passwordRef.current && login) {
        await login(emailRef.current.value ,passwordRef.current.value);   
        navigate(redirectPath, { replace: true });   
      }
    } catch {
        setError('Failed to Login');   
    }
      setLoading(false)
}

  return (
    <section className='  min-h-[320px] mt-[140px]'>
<div className=' w-[80%] h-[400px] container relative m-auto bg-[#FFFFFF] flex gap-2 '>
  <div className='md:w-[65%]'>
    <img className='h-[100%] ' src={dlbeatsnoopImage} alt="" />
  </div>
  <div className='md:w-[35%] md:static absolute '>
  <form onSubmit={handleSubmit} className='container m-auto mt-24  h-64 w-96 flex flex-col justify-around items-center '>
  <label htmlFor="" className=' font-medium  text-2xl '>Login</label>
  {/* <label className=' font-black  text-base items-end  '>Email :</label> */}
    {error && <h1 className='text-red-500'>{error}</h1>}
    <input ref={emailRef} className=' h-7 w-[80%] border-b-2 border-black cursor-text text-center'type="email" placeholder=' Email ' />
    {/* <label className=' font-black  text-base  '>Password : </label> */}
    <input ref={passwordRef} className='  h-7 w-[80%] border-b-2 border-black cursor-text text-center' type="password" placeholder='Mot De Passe'/>
    <button type='submit' disabled={loading}  className=' py-1 text-white cursor-pointer border-2 px-2 bg-sky-600 border-sky-600 rounded-lg'>connected</button>
    
    <Link className='text-blue-300 underline font-serif cursor-pointer ' to={'/forgot_password'}>Forgot Password
    </Link>
    <p>Need an acount <Link className='text-red-500 underline font-serif cursor-pointer' to={'/NouvelleInscription'}>signup
    </Link></p>
    
    
</form>
  </div>
</div>


    </section>
  )
}

export default Login;
