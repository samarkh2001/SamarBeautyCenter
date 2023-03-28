import "./headerDesign.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Profile from "../user/Profile";
function Header() {
  return (
    <Navbar id="navbar" sticky="top">
      <Navbar.Brand className="p-2 logo" href="/#home">
        Samar Beauty Center
      </Navbar.Brand>
      <Container fluid className="nav_container">
        <Nav className="me-auto">
          <Nav.Link href="/#home">Perfume</Nav.Link>
          <Nav.Link href="/#home">Creams & Body oil</Nav.Link>
          <Nav.Link href="/#home">Clothes</Nav.Link>
          <Nav.Link href="/#home">Shoes</Nav.Link>
          <Nav.Link href="/#home">Accessories</Nav.Link>
          <Nav.Link href="/#about">About</Nav.Link>
          <Nav.Link href="/#contact">Contact</Nav.Link>
        </Nav>
        <Profile />
      </Container>
    </Navbar>
  );
}

export default Header;
