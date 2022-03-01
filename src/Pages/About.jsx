import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const history = useNavigate();
  return (
    <div>
      <h1>About Me</h1>
      <button type="button" onClick={ history.goBack }>VOLTAR</button>
    </div>
  );
}
