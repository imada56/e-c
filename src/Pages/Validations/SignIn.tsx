import {z} from 'zod'

const signInSchema = z.object({
    firstName : z.string().min(1,{message :'firstName error'}),
    email : z.string().min(1,{message :'required email !'}).email(),
    password : z
    .string()
    .min(8,{message :'password must be at least 8 c'})    
})
type singInType = z.infer<typeof signInSchema> ;




export {signInSchema,singInType};