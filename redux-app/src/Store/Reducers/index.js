//Revisa que acción se va a relizar sobre el state globalizado

import { combineReducers } from 'redux';

import ElementoReducer from './ElementoReducer';

const allReducers = combineReducers({
	elementoReducer: ElementoReducer
});

export default allReducers;