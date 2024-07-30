"use client"
import { useRouter } from 'next/navigation'
// for the app router
// useRouter  for the next/router is for the pages directory
// clinet component
import React from 'react'

const ContactButton = () => {
  const router=useRouter()
  function handleClick() {
    router.push("/contact")
  }
  // re- rendering the whole page hard navigation reilt doent exist first see in the clinet cache doent exist
  // result of new segemnt which try to find if it doent exit in the cline tcache if go hard navigation
  // goin to server and get the particualr segemnt
  // pre-fetch or re-rendered
  // less data from server to the client
  // cliient side cache to store the result of rsc reused for visited seg or prefetched segemnt
  // prefetch preload before visited
  // the result payload is going to be stored ihte cinet side chache
  // pre-fetch is in production
  // prefetch is in the background
  // soft navigation go the clinet cache if the route is pre-fetched before 

  return (
    <button onClick={handleClick}> 
      Contact
    </button>
  )
}

export default ContactButton
// the first time rendered from the server then the clinet cache