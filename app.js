// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col, Button } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to My App</h1>
          <p>This is a simple React app using Bootstrap</p>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
