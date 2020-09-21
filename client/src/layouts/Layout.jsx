import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./layout.css";
import { removeToken } from "../services/auth";

export default function Layout(props) {
  const { currentUser, children } = props;

  const logout = async () => {
    const response = await removeToken();
    console.log(response);
  };

  return (
    <>
      <div>
        <Navbar bg="dark" expand="md">
          <Navbar.Brand href="/">
            <h1 className="nav-title">Escape the Global Object</h1>
          </Navbar.Brand>
          {currentUser && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav.Link className="link" href="/">
                  Play
                </Nav.Link>
                <Nav.Link className="link" href="/highscore">
                  High Scores
                </Nav.Link>
                <Nav.Link className="link" href="/submitquestion">
                  Submit Question
                </Nav.Link>
                <Nav.Link className="link" href="/login" onClick={logout}>
                  Logout
                </Nav.Link>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
      </div>
      {/* )} */}
      <main>{children}</main>
    </>
  );
}
