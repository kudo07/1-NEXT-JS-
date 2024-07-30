import {z} from 'zod'

export const GuessEntrySchema=z.object({
    name:z.string().min(1,{message:'name is requiredd'}),
    message:z.string().min(1)
})