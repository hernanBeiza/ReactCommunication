import React, { useState, useEffect, useContext } from 'react';

import './AgregarItem.css';
import { Form, FormGroup, Label, Input, Button, FormFeedback, FormText } from 'reactstrap';

import { Elemento } from './../../Models';
import { ItemContext } from './../../ItemContext';

function AgregarItem() {
	const [elementos,setElementos] = useContext(ItemContext);

  const [flagEnviar, setFlagEnviar] = useState(false);
  const [nombre, setNombre] = useState("");

	const updateName = (e) => {
		setNombre(e.target.value);
	}

  useEffect(() => {
    setFlagEnviar( validarFormulario() )
  }, [nombre]);
  // Only re-run the effect if usuario or contrasena change
  
  const validarFormulario = () => {
    if (nombre === "") {
      //setNameError('Name cant be blank!')
      return true;
    } 
    return null;
  }

  const enviar = (event) => {
  	console.log("enviar");
  	event.preventDefault();
  	let id = elementos.length+1;
		setElementos(prevItems=>[...prevItems,new Elemento(id,nombre)]);
		setNombre("");
  }

  return (
    <div className="AgregarItem">
	    <Form onSubmit={ (event) => enviar(event) }>
				<FormGroup>
	        <Input type="text" name="nombre" id="nombre" placeholder="Nombre" value={nombre} onChange={updateName} invalid={flagEnviar}/>
	        <FormFeedback>Debe ingresar un nombre</FormFeedback>
	      </FormGroup>
				<FormGroup>
	        <Button type="submit" disabled={ flagEnviar }>Guardar</Button>
	      </FormGroup>
      </Form>
  	</div>
	  );
}

export default AgregarItem;