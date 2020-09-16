import React, { useState } from "react";
import { Card, FormControl, Button } from "react-bootstrap";

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
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Body>
            <h1 className="login-title">Signup</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                props.registerSubmit(formData);
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
              <Button type="submit" variant="info">
                Submit
              </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
