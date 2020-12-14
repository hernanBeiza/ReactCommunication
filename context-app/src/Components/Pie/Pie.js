import React, {useState, useContext} from 'react';

import './Pie.css';

import { Item } from './../../Models';
import { ItemContext } from './../../ItemContext';

function Pie() {
  const [elementos,setElementos] = useContext(ItemContext);

  return (
    <footer>
      <small>Total de items: {elementos.length} </small>
    </footer>
  );
}

export default Pie;
