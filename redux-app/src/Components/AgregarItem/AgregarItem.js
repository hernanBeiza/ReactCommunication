import React, { useState, useEffect } from 'react';

import './AgregarItem.css';
import { Form, FormGroup, Input, Button, FormFeedback } from 'reactstrap';

import { Elemento } from './../../Models';

//Acceder desde cualquier componente al store en Provider
import { useSelector } from 'react-redux';
//Para poder usar los action o dispatchs
import { useDispatch } from 'react-redux';
//Importar mis actions
import { guardarElemento, obtenerTodos } from './../../Store/Actions';

function AgregarItem() {

  const [flagEnviar, setFlagEnviar] = useState(false);
  const [nombre, setNombre] = useState("");

  const dispatch = useDispatch();
  //Acceder a todo el state
  const elementoReducer = useSelector(state =>state.elementoReducer);

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
    console.log(elementoReducer.elementos);
    let id = 0;
    if(elementoReducer.elementos.length>0){
      id = elementoReducer.elementos[elementoReducer.elementos.length-1].id;
      id++;
    }
    dispatch(guardarElemento(new Elemento(id,nombre)));
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