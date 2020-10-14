import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';


function ProfileLink() {
    const { user } = useAuth0();
    const {picture} = user;



    return (
        <NavLink to='/profile'>
            <img
            src={picture}
            alt="Profile"
            className="profile-link nav-item"
          />
        </NavLink>
    )
}

export default ProfileLink
