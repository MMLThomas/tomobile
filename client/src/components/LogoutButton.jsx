import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {navBarText} from './NavBarText'
import { useSelector } from "react-redux";


const LogoutButton = () => {
  let language = useSelector(state => state.language.language)


  const { logout } = useAuth0();
  return (
    <button
      className="log-button nav-item"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      {navBarText[language]["logout"]}
    </button>
  );
};

export default LogoutButton;