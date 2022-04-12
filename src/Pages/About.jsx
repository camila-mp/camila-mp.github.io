import React from 'react';
import Container from 'react-bootstrap/Container';
import {
  textAboutProfessional1,
  textAboutProfessional2,
  textAboutPersonal } from '../Assets/aboutMe';
import './About.css';

export default function About() {
  return (
    <Container id="about-container">
      <h1>Sobre mim</h1>
      <section id="about-text-section">
        <p>{ textAboutProfessional1 }</p>
        <p>{ textAboutProfessional2 }</p>
        <p>{ textAboutPersonal }</p>
      </section>
    </Container>
  );
}
