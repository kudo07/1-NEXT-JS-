'use server'
// apply all the methods of this has the server actions
import { createGuessBookEntry } from "@/lib/mongo/guessbook"
import { GuessEntrySchema } from "@/lib/schema"
import { revalidatePath } from "next/cache"

// using the server actions to directly interact with the server no the intermediate api layer

const addEntry = async(data) => {
  const {name,message}=Object.fromEntries(data)
//   if(!name || !message) throw new Error('invalid data')
// GuessEntrySchema.parse({name,message})
const {error:zodError}=GuessEntrySchema.safeParse({name,message})
if(zodError){
  return {error:zodError.format()}
}
 const {error}= await createGuessBookEntry({name,message}) 
  if(error) throw new Error(error)
    revalidatePath('/guessbook')
  // to make the changes visible in the ui otherwise it doesnot see
}

export default addEntry
