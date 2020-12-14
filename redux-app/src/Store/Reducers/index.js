//Revisa que acción se va a realizar sobre el state globalizado

import { combineReducers } from 'redux';

import ElementoReducer from './ElementoReducer';

const allReducers = combineReducers({
	elementoReducer: ElementoReducer
});

export default allReducers;