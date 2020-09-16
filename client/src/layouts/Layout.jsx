import React from "react";
import { Navbar } from "react-bootstrap";
import "./layout.css";

export default function Layout(props) {
  const { currentUser, children } = props;

  return (
    <>
      {/* {currentUser && ( */}
      <div>
        <Navbar bg="dark">
          <Navbar.Brand href="#home">
            {/* <img
            alt=""
            src="#"
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> */}
          </Navbar.Brand>
          <h1 className="nav-title">Escape the Global Object</h1>
        </Navbar>
      </div>
      {/* )} */}
      <main>{children}</main>
    </>
  );
}
