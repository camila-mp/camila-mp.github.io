import React from 'react';
import Container from 'react-bootstrap/Container';
import mypic from '../Assets/20210422_5.2.jpg';
import { backendSkills, frontendSkills } from '../Assets/skills';
import './Home.css';

export default function Home() {
  function mapSkills(area) {
    if (area === 'frontend') {
      return (
        frontendSkills
          .map(
            (item, index) => <div className="frontend-skill" key={ index }>{ item }</div>,
          )
      );
    }
    if (area === 'backend') {
      return (
        backendSkills
          .map(
            (item, index) => <div className="backend-skill" key={ index }>{ item }</div>,
          )
      );
    }
  }

  return (
    <Container id="home-container">
      <img id="picture-camila" src={ mypic } alt="minha-foto" />
      <header id="name-header">
        <h1>Camila Malvessi Pereira</h1>
        <h3 className="h3-dev-title">Desenvolvedora fullstack</h3>
      </header>
      <section id="card-section">
        <div className="card">
          <div className="card-front">
            <h3>front-end</h3>
          </div>
          <div className="card-back">
            { mapSkills('frontend') }
          </div>
        </div>
        <div className="card">
          <div className="card-front">
            <h3>back-end</h3>
          </div>
          <div className="card-back">
            { mapSkills('backend') }
          </div>
        </div>
      </section>
    </Container>
  );
}
