import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';
import {AiOutlineCar} from 'react-icons/ai'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import {navBarText} from './NavBarText'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  let language = useSelector(state => state.language.language)

  


  return (
    <>
      <div className='navbar'>
        <div className='navbar-container container'> 
          <NavLink to='/' className="navbar-logo">
            <AiOutlineCar className="navbar-icon"/>
             Tomobile
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes className='fa-times'/> : <FaBars className='fa-bars'/> }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink to='/learn-more' className="nav-links">
              {navBarText[language]["learn more"]}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/login' className="nav-links">
                {navBarText[language]["login"]}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/signup' className="nav-links">
              {navBarText[language]["signup"]}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}



export default Navbar;



