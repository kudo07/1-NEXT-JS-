import React from 'react'
import NavLink from '../ui/NavLink'
import ContactButton from '../ui/ContactButton'
import ThemeButton from '../ui/ThemeButton'

const Header = () => {
  return (
  <header className="bg-blue-100 p-4">
          <nav className="container items-center justify-between">
            <ul className="flex gap-4">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/about">About</NavLink>
              </li>
              <li>
                <NavLink href="/posts">Posts</NavLink>
              
              </li>

              <li>
                <NavLink href="/todos">Todos</NavLink>
              </li>
               <li>
                <NavLink href="/guessbook">Guessbook</NavLink>
              </li>
                         
              {/* <li>
                <NavLink href="/contact">contact</NavLink>
                </li> */}
              {/* use the procatamically routes using the useRouter */}
              <ContactButton/>
                <ThemeButton/>
            </ul>
            
          </nav>
        </header>     
  )
}

export default Header