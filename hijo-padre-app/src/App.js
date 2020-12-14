import React, { useState } from 'react';

import { Container, Row, Col, Button } from 'reactstrap';

import './App.css';

import { Menu } from './Menu';
import { Pie } from './Pie';
import { IngresarNombre } from './IngresarNombre';

function App() {

	const [mensajeRecibido, setMensajeRecibido] = useState("");
	const [nombre, setNombre] = useState("");

  return (
    <div className="App">
      <Menu onMensajeRecibido={setMensajeRecibido}></Menu>
      <Container>
  	    <Row>
	  	    <Col>
  		    	<span>Mensaje desde Menu: {mensajeRecibido}</span>
    		 	</Col>
      	</Row>
        <Row>	  	
          <Col>
  		    	<span>Hola, {nombre}</span>
    		 	</Col>
  		 	</Row>
  		 	<Row>
          <Col>
	          <IngresarNombre onCambiarNombre={(value)=>setNombre(value)}></IngresarNombre>
    		 	</Col>
      	</Row>
      </Container>
      <Pie></Pie>
    </div>
  );
}

export default App;
