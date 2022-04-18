import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "./CustomLink";
import "./Header.css";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <Navbar bg="secondary" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          className="fs-2"
          style={{ color: "#89d4eb", fontWeight: "bold" }}
          as={Link}
          to="/"
        >
          Wild-Life Photography
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <CustomLink to="/home">Home</CustomLink>
            </Nav.Link>
            <Nav.Link>
              <CustomLink to="/services">Services</CustomLink>
            </Nav.Link>
            <Nav.Link>
              <CustomLink to="/blog">Blog</CustomLink>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <CustomLink to="/about">About</CustomLink>
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link>{user.displayName}</Nav.Link>
                <Button variant="danger" onClick={() => signOut(auth)}>
                  Logout
                </Button>
              </>
            ) : (
              <Nav.Link eventKey={2} as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
