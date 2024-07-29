'use client'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'



// by cachiong at mucha as well 
// turns the whole into dynamic and render the latest posts as well
// render every time at run time 
// get the latest post and render on the server and send it to the client
// top of rsc by caching as much as possible

const GuessEntryForm = () => {
  const router=useRouter()
  const [isPending,startTransition]=useTransition()
  const [isFetching,setIsFetching]=useState()
const isMutating=isFetching || isPending
// 
const handleSubmit=async event=>{
  event.preventDefault()
  const form=event.currentTarget 
  const formData=new FormData(form)
  const {name,message}=Object.fromEntries(formData)
  if(!name || !message) return 
  setIsFetching(true)
  const {error}=await fetch('/api/guessbook',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({name,message})
  })
  console.log(error);
  form.reset()
  setIsFetching(false) 
  startTransition(()=>{
    router.refresh()
  })
  
}
  
  return (
    <form className='flex max-w-sm flex-col gap-y-4 text-lg' onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder='name' className='rounded border bg-transparent px-3 py-1 dark:border-emerald-800' />

      <input type="text"
        name='message'
        placeholder='Your message...' className= 'rounded border bg-transparent px-3 py-1 dark:border-emerald-800'/>
      <button type='submit'
        disabled={isMutating}
        className='rounded bg-black px-3 py-1 text-white disabled:opacity-50 dark:bg-white dark:text-black'>Add</button>
    </form>
  )
}

export default GuessEntryForm
