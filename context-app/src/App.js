import './App.css';

import { Container, Row, Col } from 'reactstrap';

import { ItemProvider } from './ItemContext/ItemContext';

import { Menu, Lista, AgregarItem, Pie } from './Components';

function App() {
  return (
    <ItemProvider>
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
    </ItemProvider>
  );
}

export default App;
