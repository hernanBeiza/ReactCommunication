import React, { useState } from 'react';

import { Container, Button } from 'reactstrap';

import './App.css';

import { Menu } from './Menu';
import { Pie } from './Pie';

function App() {

	const [flagAbrirMenu, setFlagAbrirMenu] = useState(false);
	const [botonLabel, setBotonLabel] = useState("Abrir Menú");

	const abrirMenu = () => {
		console.log("abrirMenu",flagAbrirMenu);
		if(flagAbrirMenu){
			setBotonLabel("Abrir Menú");
			setFlagAbrirMenu(false);
		} else {
			setBotonLabel("Cerrar Menú");
			setFlagAbrirMenu(true);
		}
	}

  return (
    <div className="App">
    	<Menu flagAbrirMenu={flagAbrirMenu}></Menu>
	  	<Container>	  
  			<Button onClick={ abrirMenu }>{botonLabel}</Button>
  		</Container>
			<Pie></Pie>
    </div>
  );
}

export default App;
