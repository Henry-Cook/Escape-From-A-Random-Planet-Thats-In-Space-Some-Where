import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./layout.css";

export default function Layout(props) {
  const { currentUser, children } = props;

  return (
    <>
      <div>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="/">
            <h1 className="nav-title">Escape the Global Object</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {currentUser && (
            <>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav.Link className="link" href="/highscore">
                  High Scores
                </Nav.Link>
                <Nav.Link className="link" href="/highscore">
                  Submit Question
                </Nav.Link>
                <Nav.Link className="link" href="/highscore">
                  Settings
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
