import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const history = useNavigate();
  return (
    <div>
      <h1>My projects</h1>
      <button type="button" onClick={ history.goBack }>VOLTAR</button>
    </div>
  );
}
