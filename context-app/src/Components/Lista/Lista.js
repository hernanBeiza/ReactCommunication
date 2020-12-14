import React, {useState, useContext} from 'react';

import './Lista.css';

import { ListaItem } from './../ListaItem'
import { Elemento } from './../../Models';

import { ItemContext } from './../../ItemContext';

function Lista() {
	const [elementos,setElementos] = useContext(ItemContext);

  return (
    <div className="Lista">
    	<ul>
    		{elementos.map(item=>{return <ListaItem key={item.id} item={item} ></ListaItem>})}
    	</ul>
  	</div>
  );
}

export default Lista;
