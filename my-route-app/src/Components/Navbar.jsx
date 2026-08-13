import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to='/'>Home</NavLink>{"||"}
            <NavLink to='fashion'>Fashion</NavLink>{"||"}
            <NavLink to='login'>Login</NavLink>{"||"}
            
            <NavLink to='mobiles'>Mobile</NavLink>{"||"}
            <NavLink to='dashboard'>Dashboard</NavLink>{"||"}
            <NavLink to='profile'>Profile</NavLink>{"||"}
            <NavLink to='Settings'>Settings</NavLink>



            
        </nav>
    </div>
  )
}

export default Navbar