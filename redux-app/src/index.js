import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

//Crear store
import { createStore } from 'redux';
//Conectar store con toda la app
import { Provider } from 'react-redux';
//Importar todos los reducers
import allReducers from './Store/Reducers';
//Combinar reducers para poder pasárselos al store
const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>console.log(store.getState()));

ReactDOM.render(
	<Provider store={store}>
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
