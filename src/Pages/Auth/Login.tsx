import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext} from '../../ContexAuth/ContexAuth'; // Adjust the import path and interface as per your actual implementation
import dlbeatsnoopImage from '../../Assets/Images/dl.beatsnoop 1.png';
import {z} from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../Form/Input';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';
 

interface LoginProps {
  imgs:string
}



const signInSchema = z.object({
     email : z.string().min(1,{message :'required email !'}).email(),
     password : z
     .string()
    //  .min(8,{message :'password must be at least 8 c'})    
 })
 
 type singInType = z.infer<typeof signInSchema> ;






const Login: React.FC<LoginProps>=()=> {

  
  const [error ,setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/compts';

const  {register ,handleSubmit ,formState:{errors}} = useForm<singInType>(
    {
    mode:'onBlur',    
    resolver: zodResolver(signInSchema),
    })

const submitForm: SubmitHandler<singInType> = async ({ email, password }) => {

    setError('');
    setLoading(true);
    try {
      
      await signInWithEmailAndPassword(auth, email, password);
      navigate(redirectPath, { replace: true }); 
      
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential') {
        setError("Incorrect password or email");
      } else {
        setError("Error while connecting");
      }
    } finally {
      setLoading(false);
    }
  };

  

 
  return (
    <section className='  min-h-[320px] mt-[140px]'>
<div className=' w-[80%] h-[400px] container relative m-auto bg-[#FFFFFF] flex gap-2 '>
  <div className='md:w-[65%]'>
    <img className='h-[100%] ' src={dlbeatsnoopImage} alt="" />
  </div>
  <div className='md:w-[35%] md:static absolute '>
  <form  onSubmit={handleSubmit(submitForm)} 
  className=' container m-auto mt-24  h-64 w-96 flex flex-col justify-around items-center '>
  <label htmlFor="" className=' font-medium  text-2xl '>Login</label>
  
    {error && <h1 className='text-red-500'>{error}</h1>}
    <Input
          label={' Email '}
          name={'email'}
          type={'email'}
          register={register}
          error={errors.email?.message} />
    <Input
          label={' Password '}
          name={'password'}
          type={'password'}
          register={register}
          error={errors.password?.message} />

    <button 
    type='submit' 
    disabled={loading}  
    className=' py-1 text-white cursor-pointer border-2 px-2 bg-sky-600 border-sky-600 rounded-lg'>
    connected
    </button>
    
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
