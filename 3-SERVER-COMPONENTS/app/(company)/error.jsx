'use client'
import React, { useEffect } from 'react'

const Error = ({error,reset}) => {
  useEffect(()=>{
    console.log(error)
  },error)
  return (
    <div className='text-orange-400 text-lg'>
      {error.message}
    </div>
  )
}

export default Error

// in profile example of template every time renders
// i company example of layout