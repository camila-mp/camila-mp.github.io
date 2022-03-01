import React from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const history = useNavigate();
  return (
    <Row>
      <Col><h1>Home</h1></Col>
      <button type="button" onClick={ history.goBack }>VOLTAR</button>
    </Row>
  );
}
