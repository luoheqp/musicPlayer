import React, { useState } from "react";
import { LoginContent, ContentPart } from "./style";
import { useDispatch } from "react-redux";
import { handlePostToLogin } from "@r/common";
// import anime from "animejs";

const Login = (props) => {
  const dispatch = useDispatch();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = ({ value }, type) => {
    if (type === "phone") {
      setPhone(value);
    } else {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    dispatch(handlePostToLogin({ phone, password }));
  };

  return (
    <LoginContent>
      <div className="title">
        Hello
      </div>
      <ContentPart>
        <input
          type="text"
          className="input-item"
          value={phone}
          onChange={({ currentTarget }) =>
            handleInputChange(currentTarget, "phone")
          }
        />
        <input
          type="text"
          className="input-item"
          value={password}
          onChange={({ currentTarget }) =>
            handleInputChange(currentTarget, "password")
          }
        />
        <input type="button" value="login" onClick={handleLogin} />
      </ContentPart>
    </LoginContent>
  );
};

export default Login;
