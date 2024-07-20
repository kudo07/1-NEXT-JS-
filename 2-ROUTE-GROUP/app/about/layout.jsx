
import React from 'react'

const AboutLayout = ({children}) => {
  return (
    <section>
      <h1>"About Layout, app, about, page.jsx, layout.jsx." statrs the ABOUT</h1>
      <h2>team and project are in the layout from the about folder route</h2>
      <div className='mt-6'>{children}</div>
    </section>
  )
}

export default AboutLayout
// this is the layout of the /about tht all of the childrens inside the about folder
// will shared layout preserve state rsc fetch data all the child segemtns
// /about comes from about/page.jsx
// inclde the project, team children is the segement futher /about/project and /about/team