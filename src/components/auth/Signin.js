import React from "react";
import "../../styles/Signin.css";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button";

const Signin = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Login</button>;
};

export default Signin;
