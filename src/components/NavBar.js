import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <h2>Day Vees News Blog</h2>
        <div className='links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/latestNews">Latest News</NavLink>
        </div>
    </div>
  )
}

export default NavBar