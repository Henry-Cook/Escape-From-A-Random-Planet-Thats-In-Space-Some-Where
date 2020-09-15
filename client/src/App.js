import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/main/Main";
import LoginSignUp from "./screens/login_signup/LoginSignUp";
import { Route, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  // useEffect(() => {
  //   const handleVerify = async => {
  //     const userData = await verifyUser();
  //     setCurrentUser(userData)
  //   }
  //   handleVerify()
  // }, [])

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  return (
    <>
      <Route path="/" exact>
        <Main />
      </Route>

      <Route>
        <LoginSignUp path="/login" exact loginSubmit={loginSubmit} />
      </Route>
    </>
  );
}

export default App;
