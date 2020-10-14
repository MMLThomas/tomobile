import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';
import {AiOutlineCar} from 'react-icons/ai'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useAuth0} from '@auth0/auth0-react' 
import './Navbar.css'
import AuthNav from "./AuthNav";
import {navBarText} from './NavBarText'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  let language = useSelector(state => state.language.language)


  const auth = useAuth0()
  

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
            <li>
              <div >
                <AuthNav />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {console.log(auth)}
    </>
  )
}



export default Navbar;



