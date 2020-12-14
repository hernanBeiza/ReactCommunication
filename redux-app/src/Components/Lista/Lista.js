import React, {useState, useContext} from 'react';

import './Lista.css';

import { Alert, ListGroup } from 'reactstrap';

import { ListaItem } from './../ListaItem'
import { Elemento } from './../../Models';

//Acceder desde cualquier componente al store en Provider
import { useSelector } from 'react-redux';
//Para poder usar los action o dispatchs
import { useDispatch } from 'react-redux';
//Importar mis actions
import { obtenerElemento, obtenerTodos } from './../../Store/Actions';

function Lista() {
  //Acceder a todo el state de una propiedad del reducer
  const elementoReducer = useSelector(state =>state.elementoReducer);

  const elementos = elementoReducer.elementos;
  const dispatch = useDispatch();
  
  console.log(elementos);
  const renderItems = () => {
    if(elementos.length>0){
      return (
      <ListGroup>
        {elementos.map(item=>{return <ListaItem key={item.id} item={item} ></ListaItem>})}
      </ListGroup>
      )
    } else {
      return <Alert color="danger">No hay elementos para mostrar</Alert>;
    }
  }

  return (
    <div className="Lista">
      {renderItems()}
  	</div>
  );

}

export default Lista;
