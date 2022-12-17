import React from 'react'
import avatar from '../../assets/image-avatar.jpg'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
   <header>
    <nav className="nav flex justify-between items-center">
      <div className="nav__logo-wrapper flex items-center justify-center h-20 w-20 bg-paleCyan">
        <img src={logo} alt="navbar logo" className="nav__logo" />
      </div>
   
     <img src={avatar}/>
    </nav>
   </header>
  )
}

export default Navbar