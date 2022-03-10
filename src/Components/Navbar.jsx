import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Navbar.css';
import github from '../Assets/icons8-github-60.png';
import linkedin from '../Assets/icons8-linkedin-60.png';

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
        <Nav.Item>
          <Nav.Link
            className="nav-link"
            id="nav-icon"
            href="https://github.com/camila-mp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ github } alt="link para github da Camila" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="nav-link"
            id="nav-icon"
            href="https://www.linkedin.com/in/camila-malvessi-pereira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ linkedin } alt="link para github da Camila" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
