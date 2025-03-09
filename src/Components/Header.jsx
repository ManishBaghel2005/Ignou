import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
  <header>
    <nav>
      <ul className='flex gap-10  justify-center  p-5 bg-[#1b2836] w-full text-white'>
        <NavLink to="/">
        <li>Home</li>
        </NavLink>
       
        <NavLink to="/assginment">
        <li>Assignment</li>
        </NavLink>
        <NavLink to="/books">
        <li>Books</li>
        </NavLink>
        <NavLink to="/pyq">
        <li>PYQ</li>
        </NavLink>
      </ul>
    </nav>
  </header>
  )
}

export default Header