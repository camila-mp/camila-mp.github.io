import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { toDoListVanilla, webWalletReact, cookmasterAPI } from '../Assets/projects';
import github from '../Assets/icons8-github-60.png';
import './Projects.css';

export default function Projects() {
  const projects = [toDoListVanilla, webWalletReact, cookmasterAPI];

  function mapCards(array) {
    const cardGroup = array.map((item) => (
      <Card key={ item.id } style={ { width: '18rem' } }>
        <Card.Body>
          <Card.Title>{ item.title }</Card.Title>
          <Card.Text>
            { item.summary }
          </Card.Text>
          <a
            href={ item.link }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="proj-github" src={ github } alt="link para github projeto" />
          </a>
          <div id="proj-tag-wrap">
            {item.tags.map(
              (tag, index) => (
                <div id="projectcard-tag" key={ index }>
                  { tag }
                </div>
              ),
            )}
          </div>
        </Card.Body>
      </Card>
    ));
    return cardGroup;
  }

  return (
    <Container id="projects-container">
      <h1>Projetos</h1>
      <div id="project-cards">
        { mapCards(projects) }
      </div>
    </Container>
  );
}
