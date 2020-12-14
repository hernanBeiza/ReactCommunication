import React, {useState} from 'react';

import './Pie.css';


//Acceder desde cualquier componente al store en Provider
import { useSelector } from 'react-redux';
//Para poder usar los action o dispatchs
import { useDispatch } from 'react-redux';
//Importar mis actions
import { obtenerElemento, obtenerTodos } from './../../Store/Actions';

function Pie() {
  //Acceder a todo el state de una propiedad del reducer
  const elementoReducer = useSelector(state =>state.elementoReducer);
  const elementos = elementoReducer.elementos;
  const dispatch = useDispatch();

  return (
    <footer className="text-center">
      <small>Total de items: {elementos.length} </small>
    </footer>
  );
}

export default Pie;
