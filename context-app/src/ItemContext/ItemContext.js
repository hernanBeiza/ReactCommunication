import React, {useState, createContext} from 'react';

import { Item } from './../models';

//Se exportarán varios, por eso no default
export const ItemContext = createContext();

//El problema de usar este método es que todos los componentes que están usando este Provider, se van a renderear nuevamente
export const ItemProvider = (props) =>{
	const [items, setItems] = useState([
		new Item(1,"Uno"),
		new Item(2,"Dos"),
		new Item(3,"Tres"),
	]);

	return (
		<ItemContext.Provider value={[items,setItems]}>
			{/*Render todo lo que esté acá, pasado desde afuera*/}
			{props.children}
		</ItemContext.Provider>
	);

}