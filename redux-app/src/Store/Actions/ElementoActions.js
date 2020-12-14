import { Elemento } from './../../Models';

export const guardarElemento = (elemento) => {
	console.log("guardarElemento",elemento);
	return {
		type:'GUARDAR',
		payload: {result:true,elemento:elemento}
	}
}

export const obtenerElemento = (elemento) => {
	return {
		type:'OBTENER',
		payload: {result:true,elemento:elemento }
	}
}

export const obtenerTodos = () => {
	console.log("obtenerTodos");
	return {
		type:'OBTENERTODOS',
		payload: {result:true,elementos:[]}
	}
}

export const eliminarElemento = (id) => {
	return {
		type:'ELIMINAR',
		payload: {result:true,id:id}
	}
}