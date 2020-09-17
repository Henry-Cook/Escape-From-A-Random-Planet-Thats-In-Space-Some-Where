import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/main/Main";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { Route, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import Layout from "./layouts/Layout";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      userData ? setCurrentUser(userData) : history.push("/login");
    };
    handleVerify();
  }, []);

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  return (
    <>
      <Layout currentUser={currentUser}>
        <Route path="/signup" exact>
          <Signup registerSubmit={registerSubmit} />
        </Route>

        <Route path="/login">
          <Login loginSubmit={loginSubmit} />
        </Route>

        <Route path="/" exact>
          <Main />
        </Route>
      </Layout>
    </>
  );
}

export default App;
