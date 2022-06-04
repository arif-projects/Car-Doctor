import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navber = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">Car Doctor</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#expart">Experts</Nav.Link>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
