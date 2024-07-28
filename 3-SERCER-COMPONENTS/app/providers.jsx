"use-client"
import {ThemeProvider} from 'next-themes'

const Providers = ({children}) => {
  return (
    <ThemeProvider attribute='class'>
        {children} 
             {/*this is the clinet component the children these childrens are the layouts and pages
               can also be server compo nest server compo into the client compo
              NOW WE access to the theme providers
               */}
    </ThemeProvider>
  )
}

export default Providers
