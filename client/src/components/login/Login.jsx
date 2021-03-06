import React, { useState } from "react";
import { Card, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="login-div">
        <div className="card-sizing">
          <Card
            className="card"
            style={{ width: "50vw", height: "40vh", background: "#12263a" }}
          >
            <Card.Body>
              <h1 className="login-title">Login</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  props.loginSubmit(formData);
                }}
              >
                <FormControl
                  className="login-input"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
                <FormControl
                  className="login-input"
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  name="password"
                  minLength="6"
                />
                <Button
                  className="btn"
                  type="submit"
                  variant="primary"
                  style={{ color: "#fff" }}
                >
                  Submit
                </Button>
              </form>
              <Link to="/signup">Signup</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
