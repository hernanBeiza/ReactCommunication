const ElementoReducer = (state = [], action) => {
	console.log(state,action.type,action.payload);
	switch(action.type){
		case "GUARDAR":
			let elementos = state.elementos;
			if(elementos==undefined){
				elementos = [];
			}
			elementos.push(action.payload.elemento);
			state.elementos = elementos;
			action.payload.elementos = elementos;
			return action.payload;
		case "ELIMINAR":
			console.log("Borrar con ID",action.payload.id);
			let items = state.elementos.filter(item=>item.id!=action.payload.id);
			state.elementos = items;
			state.elemento = null;
			state.id = null;
			state.elemento = null;
			
			action.payload.elementos = items;
			action.payload.id = null;
			return action.payload;
		case "OBTENER":
			return action.payload;
		case "OBTENERTODOS":
			return action.payload;
		default:
			console.warn("Caso no definido");
			return {result:true,elementos:state};
		}
}

export default ElementoReducer;
