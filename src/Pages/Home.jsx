import React from 'react';
import Container from 'react-bootstrap/Container';
import mypic from '../Assets/20210422_5.2.jpg';
import './Home.css';

export default function Home() {
  return (
    <Container id="home-container">
      <img id="picture-camila" src={ mypic } alt="minha-foto" />
      <header id="name-header">
        <h1>Camila Malvessi Pereira</h1>
        <h3>Desenvolvedora fullstack</h3>
      </header>
      <section id="info-section">
        <h3>Habilidades</h3>
        <div className="card-container">
          <div className="info-card">
            <h4>front end</h4>
          </div>
          <div className="info-card">
            <h4>back end</h4>
          </div>
        </div>
      </section>
    </Container>
  );
}
