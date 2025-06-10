import { useForm, SubmitHandler } from "react-hook-form"
import React from 'react'
import {zodResolver} from '@hookform/resolvers/zod'
import Input from "../Form/Input"
import { signUpSchema, singUpType } from "../Validations/SignUp"
import UseCheckEmailAvailability from "../CostumHooks/UseCheckAvailability"

function RegisterTest (){
    
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
    
const submitForm :SubmitHandler <singUpType> = (data)=>{
    console.log(data)
}
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
   <form onSubmit={handleSubmit(submitForm)}
    className='  container m-auto mt-36  h-64 w-96 flex flex-col justify-around items-center '>
    <label htmlFor="" className=' font-medium  text-2xl '>SignUp</label>
  
  <Input
          label={' firstName '}
          name={'firstName'}
          type={'text'}
          register={register}
          error={errors.firstName?.message} />
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
    

      <button
      className=' py-1 text-white cursor-pointer 
      border-2 px-2 bg-sky-600 border-sky-600 rounded-lg'
      disabled={emailAvailabilityStatus
        === "checking"?true:false
      }>
      connected
      </button>
      
      
  </form>
  )
}

export default RegisterTest;
