'use client'
import React, { useEffect } from 'react'
import NavLink from '../components/ui/NavLink'
import { motion } from 'framer-motion'
// this is the layout which shared among about, contact and team /routes
const AboutLayout = ({children}) => {
  useEffect(()=>{
    console.log("this is inside in the company layout")
  })
  return (
    <section>
      <h1>"About Layout, app, about, page.jsx, layout.jsx." statrs the ABOUT</h1>
      <h2>team and project are in the layout from the about folder route its the shared ui in the further segemnts
        
      </h2>
      {/* children or child pages are plugged in
       */}
      <section className='py-24'>
      <div className='container flex'>
        <div className='overflow-y-auto border-r border-gray-200 py-6 pr-12'>
          <nav className='flex flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-4'>
              <motion.li 
                initial={{opacity:0,x:-20}}
                animate={{opacity:1,x:0}} 
                transition={{delay:0.2}}      >
                <NavLink href='/about'>About</NavLink>
              </motion.li>
              <motion.li 
                initial={{opacity:0,x:-20}}
                animate={{opacity:1,x:0}} 
                transition={{delay:0.2}}      >
                <NavLink href='/team'>Team</NavLink>
              </motion.li>
              <li>
                <NavLink href='/contact'>Contact</NavLink>
              </li>
              <motion.li 
                initial={{opacity:0,x:-20}}
                animate={{opacity:1,x:0}} 
                transition={{delay:0.2}}      >
                <NavLink href='/join'>Join</NavLink>
              </motion.li>
            </ul>
          </nav>
        </div>

        <main className='grow ml-12 p-6 bg-gray-50'>{children}</main>
      </div>
    </section>
    </section>
  )
}

export default AboutLayout
// this is the layout of the /about tht all of the childrens inside the about folder
// will shared layout preserve state rsc fetch data all the child segemtns
// /about comes from about/page.jsx
// inclde the project, team children is the segement futher /about/project and /about/team