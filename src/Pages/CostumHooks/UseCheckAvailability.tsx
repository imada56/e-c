import { useState } from "react";
import { emailExisteDéjà } from "../Validations/Utils/checkEmail";




type Tstatus ="idle"|"checking"|"available"| "notAvailable"|"failed"

const UseCheckEmailAvailability =()=>{
  const [emailAvailabilityStatus,setEmailAvailabilityStatus] = useState<Tstatus>('idle');  
  const [enteredEmail,setEnteredEmail] = useState<null | string>(null)

  const checkEmailAvailability = async(email:string)=>{
//////////
// .refine(async (email) => {
//       const existe = await emailExisteDéjà(email);
//       return !existe;
//     }, {
//       message: "Cet email est déjà utilisé",
//     }),
/////////
    setEnteredEmail(email)
    setEmailAvailabilityStatus('checking')
   
    try{
        const existe =await emailExisteDéjà(email)
        if(!existe){
         setEmailAvailabilityStatus('available')
         console.log('available ===')
        }else{
         setEmailAvailabilityStatus('notAvailable')
         console.log('not available ===')
        }

    }catch(error){
     setEmailAvailabilityStatus('failed')
    }
  }
  const resetCheckEmailAvailability =()=>{
    setEmailAvailabilityStatus('idle')
    setEnteredEmail(null)
  }
  return{
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,resetCheckEmailAvailability
  }
}
export default UseCheckEmailAvailability