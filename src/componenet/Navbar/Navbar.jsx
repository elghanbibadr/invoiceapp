import React from 'react'
import avatar from '../../assets/image-avatar.jpg'
import logo from '../../assets/logo.svg'
import sunLogo from '../../assets/icon-sun.svg'
import '../Navbar/Navbar.css'
import { useContext } from 'react'
import { AppContext } from '../Store/AppContext'

const Navbar = () => {
   const {them,setThem}=useContext(AppContext);
 const handleDarkThemIconClicked=()=>{
   setThem( prv=> prv ==='light' ? "dark" :"light")
 };
  return (
   <header>
    <nav className="nav bg-paleBlue flex justify-between items-center">
      <div className="nav__logo-wrapper  flex items-center justify-center h-20 w-20 bg-paleCyan">
        <img src={logo} alt="navbar logo" className="nav__logo " />
      </div>
      <div className="navLogos-Wrraper flex flex-row justify-between items-center">
          <img onClick={handleDarkThemIconClicked} className='nav__them mr-10 ' src={sunLogo} />
            <img className='nav__avatar rounded-full h-10' src={avatar}/>
      </div>
              </nav>
   </header>
  )
}

export default Navbar