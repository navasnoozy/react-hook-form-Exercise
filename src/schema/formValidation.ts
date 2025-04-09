// formValidation .ts file 

import { z} from 'zod';
import { emailRegex } from '../utils/constants';

export const formSchema = z.object ({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1,'Email is requied').regex(emailRegex, 'Enter a valid email'),
    hobbies : z.string().array().min(1,'select atleast one').max(2,'No more than two'),
    gender : z.enum(['male','female','other'],{message:'No ? what kind of gender it is?'}),
    skills: z.string().array().min(1,'Select at least one skill').max(2,'A man with more than 2 skill is overqualified'),
    DateTime : z.string().optional()
});
 
export type formSchemaType = z.infer<typeof formSchema>

export const defaultValues : formSchemaType ={
    name:'',
    email:'',
    hobbies:[],
    gender:'male',
    skills:[]
}