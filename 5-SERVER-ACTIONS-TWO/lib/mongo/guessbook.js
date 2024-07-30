// import clientPromise from '@/lib/mongo/client'

import { cache } from "react";
// react actions
import clientPromise from "./client"

// let client
let db
let guessbook

async function init() {
  if (db) return
  try {
    // client = await clientPromise
    // db = await client.db()
    // guessbook = await db.collection('guessbook')
    const client = await clientPromise;
    db = client.db('guessbook'); // Specify your database name here
    guessbook = db.collection('guessbook'); // Specify your collection name here
    console.log('Connected to database and initialized collection.');
  } catch (error) {
    throw new Error('Failed to connect to the database.')
  }
}

;(async () => {
  await init()
})()


export const getGuessBookEntries=cache(async()=>{
    try {
        if(!guessbook) await init()
        console.log("fetching entries")
        const entries=await guessbook
        .find({})
        .map(entry=>({...entry,_id:entry._id.toString()}))
        .toArray()
        return {entries}
    } catch (error) {
    return { error: 'Failed to fetch guessbook!' }
    }
})
// endpoit 
export const createGuessBookEntry=async({name,message})=>{
  try {
    if(!guessbook) await init()
      return guessbook.insertOne({name,message,updatedAt:new Date()})
  } catch (error) {
    return {error:`failed to create entry`}
    
  }
}