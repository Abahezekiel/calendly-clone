import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex items-center justify-between p-2'>
    <div className=''>  <img src="https://marketing-assets.calendly.com/media/logo.svg" alt="" className='w-52'/></div>
    <div className='flex justify-between gap-3'>
      <Link>Produc</Link>
      <Link>Solution</Link>
      <Link>Enterprise</Link>
      <Link>Pricing</Link>
      <Link>Resources</Link>
    </div>
    </div>
  )
}

export default Nav
