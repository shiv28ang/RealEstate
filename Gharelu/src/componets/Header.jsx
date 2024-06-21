// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'

const Header = () => {
  return (
      <header className="max-padd-container fixed top-1 w-full left-0 right-0 z-50">
        {}
        <div className='max-padd-container bg-white transition-all-duration-200 
        rounded-full px-5 ring-1 ring-slate-900/5'>
          <div className='flexBetween py-3'>
            {}
            <Link to={"/"}>
                <span className="font-[900] text-[24px]">
                  Ghar<span className="font-[600] medium-20">elu</span>
                </span>
            </Link>
            {}
            <div className="flexCenter gap-x-4">
              {}
              <Navbar />
              {}
              {/* <Navbar /> */}
            </div>
            
            <div>
              buttons & icon
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
