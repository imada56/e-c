import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContexAuth/ContexAuth';
import dlbeatsnoop from '../../Assets/Images/dl.beatsnoop 1.png';
import { FaGoogle } from 'react-icons/fa';
import {z} from "zod"
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UseCheckEmailAvailability from '../CostumHooks/UseCheckAvailability';
import Input from '../Form/Input';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';


const signUpSchema = z.object({
    email : z.string().min(1,{message :'required email !'}).email(),
    password : z
    .string()
    .min(8,{message :'password must be at least 8 c'})
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./]+.*/, {
  message: "Password should contain at least 1 special character",
}),
     confirmPassword: z
     .string()
     .min(1,{message :'confirm password is required'}),
}).refine((input) => input.password === input.confirmPassword,{
    message : 'Password not match',
    path :['confirmPassword']
})
type singUpType = z.infer<typeof signUpSchema> ;
function NouvelleInscription() {

const  {register ,
    handleSubmit ,
    getFieldState,
    trigger,
    formState:{errors}} = useForm<singUpType>(
    {
    mode:'onBlur',    
    resolver: zodResolver(signUpSchema),
    })

const {   emailAvailabilityStatus,
          enteredEmail,
          checkEmailAvailability,
          resetCheckEmailAvailability
  } = UseCheckEmailAvailability() 


  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  
 const navigate = useNavigate();

 const submitForm: SubmitHandler<singUpType> = async (data) => {
  const { email, password } = data;
  try {
    setError('');
    setLoading(true);

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    navigate("/compts");
  } catch (err: any) {
    console.error(err);
    if (err.code === "auth/email-already-in-use") {
      setError("Cet email est déjà utilisé.");
    } else {
      setError("Échec de la création du compte.");
    }
  } finally {
    setLoading(false);
  }
};


const emailOnBlurHandler= async (e:React.FocusEvent<HTMLInputElement>)=>{
  await trigger('email')
  const value =e.target.value;
    const { isDirty ,invalid }= getFieldState('email');
   if( isDirty && !invalid && enteredEmail!==value ){
    // cheching
    checkEmailAvailability(value)
   }
   if(isDirty && invalid &&enteredEmail){
    resetCheckEmailAvailability();
   }
}
  return (
    <section className='min-h-[320px] mt-[140px]'>
      <div className='w-[80%] h-[400px] container m-auto relative bg-[#FFFFFF] flex gap-2'>
        <div className='md:w-[65%]'>
          <img className='h-[100%]' src={dlbeatsnoop} alt='Beatsnoop' />
        </div>
        <div className='md:w-[35%] md:static absolute'>
          <form 
          className='container m-auto mt-24 h-64 w-96 flex flex-col justify-around items-center '
           onSubmit={handleSubmit(submitForm)}>
            <label htmlFor='' className='font-medium text-black text-2xl'>
              New Account
            </label>
            {error && <h1 className='text-red-500'>{error}</h1>}

             <Input
          label={' Email '}
          name={'email'}
          type={'email'}
          register={register}
          error={errors.email?.message 
            ? errors.email?.message 
            :emailAvailabilityStatus ==="notAvailable"
            ?"... This email is already in US"
            :emailAvailabilityStatus === "failed"
            ?"Error from the server "
            :""
          }
          onBlur={emailOnBlurHandler} 
          formText={
            emailAvailabilityStatus === 'checking'
            ?"We`re currently ...... !@"
            :""
          }
            sruccess={
            emailAvailabilityStatus === 'available'
            ?"This email is availble..."
            :""
          }
          disablead={
          emailAvailabilityStatus === "checking"?true:false}
          />
        <Input
          label={' Password '}
          name={"password"}
          type={'password'}
          register={register}
          error={errors.password?.message} />
 <Input
          label={' confirmPassword '}
          name={'confirmPassword'}
          type={'password'}
          register={register}
          error={errors.confirmPassword?.message} />
    


           <button type='submit' disabled={loading} className='py-2 w-[80%] text-white bg-red-600 cursor-pointer border-2 px-2'>
             Register
            </button>
            <button type='button' disabled={loading} className='py-2 w-[80%] text-black text-sm cursor-pointer border-2 px-2'>
              <FaGoogle className='text-lg text-lime-600 inline-flex mr-2' /> Sign up with Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NouvelleInscription;
