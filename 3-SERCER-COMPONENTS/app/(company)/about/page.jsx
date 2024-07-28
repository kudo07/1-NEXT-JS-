import NavLink from '@/app/components/ui/NavLink'
import { wait } from '@/lib/posts'
import React from 'react'

export function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const random=Math.random()
      if(random>0.5){
        reject("Failed to get data")
      }
      resolve()
    },2000)
})}

const page = async () => {
  await getData()

  return <div>About</div>

  // for suspense
  // await wait(3000)
  // return (
  //   <div >
  //     about
  //     <NavLink className='mt-10 p-8 container bg-emerald-400' href="/about/project">Project</NavLink>
  //   </div>
  // )
}

export default page
