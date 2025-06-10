import React from 'react'
import {Path, FieldValues, UseFormRegister } from 'react-hook-form'


type InputProps<TFieldValue extends FieldValues>= {
    label?:string;
    name:Path<TFieldValue>;
    type?:string;
    register:UseFormRegister<TFieldValue>
    error?:string;    
    onBlur?:(e:React.FocusEvent<HTMLInputElement>)=>void;
    formText?:string
    sruccess?:string
    disablead?:boolean
};

const Input = <TFieldValue extends FieldValues>({
    label,
    type,
    register,
    name ,
    error,
    onBlur,
    formText,
    sruccess,
    disablead
 }:InputProps<TFieldValue>)=> {
  const ONBlurHandler =(e: React.FocusEvent<HTMLInputElement>)=>{
   if(onBlur){
    onBlur(e);
   }
    register(name).onBlur(e);
  };
    return (
    <div className=" w-[80%] ">
         <input
       className={`h-7 w-[100%]  border-b-2 
        text-center
         ${error ? "border-red-500" : "border-black"}`}
       type={type} 
       placeholder={label}
       {...register(name)} 
       onBlur={ONBlurHandler}
       disabled={disablead}
       />
     {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
     {formText && <p className="text-gray-500 text-sm mt-1">{formText}</p>}
     {sruccess && <p className="text-green-500 text-sm mt-1">{sruccess}</p>}
     </div>
  )
}

export default Input
