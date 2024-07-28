import { getGuessBookEntries } from '@/lib/mongo/guessbook'
import React from 'react'
import GuessEntryForm from '../components/ui/GuessEntryForm'
async function getData(){
  const {entries,error}=await getGuessBookEntries()
  if(!entries || error) throw new Error("failed to fetch entries")
return entries
}
const Page =async () => {
  const entries=await getData()
  console.log(entries);
  
  return (
    <section className='py-24'>
      <div className="container">
        <h1 className='text-3xl font-bold '>Guessbook </h1>
        <GuessEntryForm/>
        <h2 className='text-slate-300 py-2 font-extrabold uppercase'> from database</h2>
        <ul className="mt-10 flex flex-col gap-y-2">
          {entries.map(e=>(
            <li key={e._id} className='flex gap-x-4'>
            <span className="text-emerald-600">{e.name}:</span>
            <span>{e.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
