import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {navBarText} from './NavBarText'
import { useSelector } from "react-redux";


const SignupButton = () => {
  let language = useSelector(state => state.language.language)


  const { loginWithPopup } = useAuth0();
  return (
    <button
      className="log-button nav-item"
      onClick={() => loginWithPopup()}
    >
      {navBarText[language]["signup"]}
    </button>
  );
};

export default SignupButton;