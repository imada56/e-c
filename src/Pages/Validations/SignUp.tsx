import {z} from "zod"
import { emailExisteDéjà } from "./Utils/checkEmail";


const signUpSchema = z.object({
    firstName : z.string().min(1,{message :'firstName error'}),
    email : z.string().min(1,{message :'required email !'}).email(),
    password : z
    .string()
    .min(8,{message :'password must be at least 8 c'})
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./]*./,{
     message:"Password should contain at least 1 special ch",
    }),
     confirmPassword: z
     .string()
     .min(1,{message :'confirm password is required'}),
}).refine((input) => input.password === input.confirmPassword,{
    message : 'Password not match',
    path :['confirmPassword']
})
type singUpType = z.infer<typeof signUpSchema> ;

export { signUpSchema,type singUpType}