"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

const NavLink = ({href,...rest}) => {
    const pathname=usePathname()
    // this is the hook and hooks can be used only in the client compo.
    // console.log(pathname);
    
    // const isActive=href.startsWith(pathname)
    const isActive=href===pathname
    // console.log(href,pathname,"efrefgrfre ");
    

    // more specific as the root path name  is /
    // console.log(isActive)
    // give us the path
    // const router=useRouter()
    // router.pathname
    // 
  return (
    <Link className={isActive?'text-cyan-400':""} href={href} {...rest}>
      
    </Link>
  )
}

export default NavLink
