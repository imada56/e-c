import { useForm, SubmitHandler } from "react-hook-form"
import React from 'react'
import {zodResolver} from '@hookform/resolvers/zod'
import Input from "../Form/Input"
import { signInSchema, singInType } from "../Validations/SignIn"

function LoginTest (){
    
const  {register ,handleSubmit ,formState:{errors}} = useForm<singInType>(
    {
    mode:'onBlur',    
    resolver: zodResolver(signInSchema),
    })
const submitForm :SubmitHandler <singInType> = (data)=>{
    console.log(data)
}

  return (
   <form onSubmit={handleSubmit(submitForm)}
    className='  container m-auto mt-36  h-64 w-96 flex flex-col justify-around items-center '>
    <label htmlFor="" className=' font-medium  text-2xl '>Login</label>
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
      className=' py-1 text-white cursor-pointer 
      border-2 px-2 bg-sky-600 border-sky-600 rounded-lg'>
      connected
      </button>
      
      


  </form>
  )
}

export default LoginTest ;