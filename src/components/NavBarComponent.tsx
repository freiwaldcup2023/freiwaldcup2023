import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


function NavBarComponent() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-1">
      <Container>
        <Navbar.Brand href="/home">Freiwaldcup 2023</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/links">Unterlagen</Nav.Link>
            <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
          </Nav>
          <Nav>
              <Nav.Link as={Link} to="/matches">Match hinzufügen</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;