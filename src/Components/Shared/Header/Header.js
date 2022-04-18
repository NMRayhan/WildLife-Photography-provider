import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import "./Header.css";

const Header = () => {
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
              <CustomLink to="/portfolio">Portfolio</CustomLink>
            </Nav.Link>
            <Nav.Link>
              <CustomLink to="/blog">Blog</CustomLink>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <CustomLink to="/about">About</CustomLink>
            </Nav.Link>
            <Nav.Link>
              <CustomLink to="/login">Login</CustomLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
