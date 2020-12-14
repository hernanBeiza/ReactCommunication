import './IngresarNombre.css';
import React, { useState, useEffect } from 'react';

import { Form, FormGroup, Col, Input } from 'reactstrap';

function IngresarNombre(props) {

  console.log(props);

  return (
    <Form>
      <FormGroup row>
        <Col>
          <Input type="text" name="nombre" id="nombre" onChange={(event)=>props.onCambiarNombre(event.target.value)}/>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default IngresarNombre;
