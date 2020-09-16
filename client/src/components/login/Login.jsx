import React, { useState } from "react";
import { Card, FormControl, Button } from "react-bootstrap";
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
        <Card
          style={{ width: "30rem", height: "25rem", background: "#12263a" }}
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
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <FormControl
                onChange={handleChange}
                placeholder="Password"
                type="password"
                name="password"
              />
              <Button type="submit" variant="primary" style={{ color: "#fff" }}>
                Submit
              </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
