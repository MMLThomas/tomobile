import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {navBarText} from './NavBarText'


function FavoritesLink() {
    let language = useSelector(state => state.language.language)
    




    return (
            <NavLink to='/profile'>
        <button className="log-button nav-item">
        {navBarText[language]["favorites"]}
        </button>
            </NavLink>
    )
}

export default FavoritesLink
