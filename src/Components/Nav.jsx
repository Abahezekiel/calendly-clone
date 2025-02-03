import React from 'react'
import { Link } from 'react-router-dom'
import Resources from '../Pages/Resources'

const Nav = () => {
  return (
    <div className='flex items-center justify-between p-2'>
    <div className=''>  <img src="https://marketing-assets.calendly.com/media/logo.svg" alt="" className='w-52'/></div>
    <div className='flex justify-between gap-3'>
      <Link to={"/product"} 
      >Product</Link>
      <Link to={"/solution"}
      >Solution</Link>
      <Link to={"/enterprise"} 
      >Enterprise</Link>
      <Link to={"/pricing"}
      >Pricing</Link>
      <Link to="/resources"
      >Resources</Link>
    </div>
    </div>
  )
}

export default Nav
