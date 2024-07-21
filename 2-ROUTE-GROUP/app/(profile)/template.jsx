'use client'
// as in this page are uses the useEffect
// layout is the server component
// as the layout and template are wraps in the route segemnts
// template.jsx are also render along with the layout
import { useEffect } from "react";
import { motion } from "framer-motion";
import NavLink from "../components/ui/NavLink";
export default function Template({children}){
    useEffect(()=>{
        console.log("this is inside the tempalte.jsx")
    })
    return (
    <div>
      <section className='py-24'>
      <div className='container flex'>
        <div className='overflow-y-auto border-r border-gray-200 py-6 pr-12'>
          <nav className='flex flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-4'>
              <motion.li 
                initial={{opacity:0,x:-20}}
                animate={{opacity:1,x:0}} 
                transition={{delay:0.2}}             
              >
                <NavLink href='/address'>Address</NavLink>
              </motion.li>
              <motion.li 
                initial={{opacity:0,x:-20}}
                animate={{opacity:1,x:0}} 
                transition={{delay:0.4}} >
                <NavLink href='/job'>Job</NavLink>
              </motion.li>
              
            </ul>
          </nav>
        </div>

        <main className='grow ml-12 p-6 bg-gray-50'>{children}</main>
      </div>
    </section>
    </div>
  )
}