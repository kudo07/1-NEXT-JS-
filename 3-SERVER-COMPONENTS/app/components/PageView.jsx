import { wait } from '@/lib/posts'
import React from 'react'

const PageView = async({slug}) => {
    await wait(2000)
  return (
    <div>
      VIEWS:1001
    </div>
  )
}

export default PageView
