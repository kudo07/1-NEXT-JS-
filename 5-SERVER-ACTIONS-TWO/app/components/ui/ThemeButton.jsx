'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
const ThemeButton = () => {
    const [mounted,setMounted]=useState(false)
    useEffect(()=>setMounted(true))
    if(!mounted){
        return null
    }

    const {resolvedTheme,setTheme} = useTheme()
    return (
      <>
      {/* <button onClick={()=>setTheme(resolvedTheme==='dark'?'light':'dark')}>{resolvedTheme==='dark'?'light':'dark'}</button> */}
      <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
      {resolvedTheme === 'dark' ? (
          <SunIcon className='h-5 w-5 text-orange-300' />
        ) : (
            <MoonIcon className='h-5 w-5 text-slate-800' />
        )}
    </button>
    </> 
)
}

export default ThemeButton
