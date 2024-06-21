/* eslint-disable no-unused-vars */
import React from 'react'
import { MdHomeWork } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav>
          <NavLink to={"/"} className={({isActive})=> isActive ?"active-link flexCenter gap-x-1 rounded full px-2 py-2": "flexCenter gap-x-1 rounded-full px-2 py-2 "}>
            <MdHomeWork/>
            <div>Home</div>
          </NavLink>

          <NavLink to={"/listing"} className={({isActive})=> isActive ?"active-link flexCenter gap-x-1 rounded full px-2 py-2": "flexCenter gap-x-1 rounded-full px-2 py-2 "}>
            <MdHomeWork/>
            <div>Listing</div>
          </NavLink>

          <NavLink to={"/"} className={({isActive})=> isActive ?"active-link flexCenter gap-x-1 rounded full px-2 py-2": "flexCenter gap-x-1 rounded-full px-2 py-2 "}>
            <MdHomeWork/>
            <div>Home</div>
          </NavLink>

          <NavLink to={"/"} className={({isActive})=> isActive ?"active-link flexCenter gap-x-1 rounded full px-2 py-2": "flexCenter gap-x-1 rounded-full px-2 py-2 "}>
            <MdHomeWork/>
            <div>Home</div>
          </NavLink>
      </nav>
  )
}

export default Navbar
