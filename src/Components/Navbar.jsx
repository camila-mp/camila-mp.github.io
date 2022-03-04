import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Navbar.css';

export default function Navbar() {
  return (
    <Container fluid as="nav" id="nav-bar">
      <Nav className="justify-content-center" id="nav-itens-container">
        <Nav.Item>
          <Nav.Link className="nav-link" href="/#/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" href="/#/about">Sobre</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link" href="/#/projects">Projetos</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
