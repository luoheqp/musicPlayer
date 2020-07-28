import React from "react";
import { PreLoginContent } from "./style";
import { Link } from "react-router-dom";

const PreLogin = (props) => {
  return (
    <PreLoginContent>
      <h3 className="title">Login If You Want</h3>
      <Link to="login">
        <p className="btn-login">Login</p>
      </Link>
    </PreLoginContent>
  );
};

export default PreLogin;
