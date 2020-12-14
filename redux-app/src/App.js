import './App.css';

import { Container, Row, Col } from 'reactstrap';

import { Menu, Lista, AgregarItem, Pie } from './Components';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Menu></Menu>
        <Container>
          <Row>
            <Col>
              <AgregarItem></AgregarItem>
            </Col>
            <Col>
              <Lista></Lista>
            </Col>
          </Row>
          <Row>
            <Col>
              <Pie></Pie>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
