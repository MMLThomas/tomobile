import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from "./SignupButton";
import ProfileLink from "./ProfileLink";

const AuthenticationButton = () => {
  const { isAuthenticated, user } = useAuth0();


  return isAuthenticated ? <div className='nav-links'><LogoutButton className="nav-item" /><ProfileLink /></div> : <div className='nav-links'><LoginButton className="nav-item"/> <SignupButton className="nav-item"/></div>;
};

export default AuthenticationButton;