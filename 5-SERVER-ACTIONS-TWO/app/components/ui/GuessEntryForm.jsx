'use client'
import addEntry from '@/app/_actions'
// import { useRouter } from 'next/navigation'
import React, { useRef, useState, useTransition } from 'react'



// by cachiong at mucha as well 
// turns the whole into dynamic and render the latest posts as well
// render every time at run time 
// get the latest post and render on the server and send it to the client
// top of rsc by caching as much as possible

const GuessEntryForm = () => {
const formRef=useRef(null)
const [validationError,setValidationErorr]=useState(null)
  //   const router=useRouter()
//   const [isPending,startTransition]=useTransition()
//   const [isFetching,setIsFetching]=useState()
// const isMutating=isFetching || isPending
// this handle sumbit is the api layer which gets the data freom the server but now as implement the actions we dont need it we directly interact with server by the _action.js which has adEntry methods which
// takes the name and message and include it inthe data base later show in the guessbook/page.jsx
// const handleSubmit=async (event)=>{
//   event.preventDefault()
//   const form=event.currentTarget 
//   const formData=new FormData(form)
//   const {name,message}=Object.fromEntries(formData)
//   if(!name || !message) return 
//   setIsFetching(true)
//   const {error}=await fetch('/api/guessbook',{
//     method:'POST',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify({name,message})
//   })
//   console.log(error);
//   form.reset()
//   setIsFetching(false) 
//   startTransition(()=>{
//     router.refresh()
//   })
  
// }

// client can call the server action and pass it as the props to the server function but dont us the server action in the client
// client action calling a server action
  async function action(data){
    const result=await addEntry(data)
    if(result?.error){
      setValidationErorr(result?.error)
      
    }else{
      formRef.current.reset()
      setValidationErorr(null)
    }
  }

  // 
  return (
    <form ref={formRef} className='flex max-w-sm flex-col gap-y-4 text-lg' action={action} >
      <input type="text" name='name' placeholder='name' className='rounded border bg-transparent px-3 py-1 dark:border-emerald-800' />
{validationError?.name && (
        <p className='text-sm text-red-400'>
          {validationError.name._errors.join(', ')}
        </p>
      )}
      <input type="text"
        name='message'
        placeholder='Your message...' className= 'rounded border bg-transparent px-3 py-1 dark:border-emerald-800'/>
        {validationError?.message && (
        <p className='text-sm text-red-400'>
          {validationError.message._errors.join(', ')}
        </p>
      )}
      <button type='submit'
        
        className='rounded bg-black px-3 py-1 text-white disabled:opacity-50 dark:bg-white dark:text-black'>Add</button>
    </form>
  )
}

export default GuessEntryForm
