import './ListaItem.css';

import { Elemento } from './../../Models';

//Acceder desde cualquier componente al store en Provider
import { useSelector } from 'react-redux';
//Para poder usar los action o dispatchs
import { useDispatch } from 'react-redux';
//Importar mis actions
import { eliminarElemento } from './../../Store/Actions';

import { Row, Col, Button, ListGroupItem } from 'reactstrap';

function ListaItem(props) {

  const dispatch = useDispatch();
  //Acceder a todo el state
  const elementoReducer = useSelector(state =>state.elementoReducer);

	const eliminar = () => {
		dispatch(eliminarElemento(props.item.id));
	}

  return (
    <ListGroupItem className="ListaItem">
    <Row>
      <Col> ID: {props.item.id} </Col>
      <Col> {props.item.nombre} </Col>
      <Col> <Button className="text-right" onClick={eliminar}ccolor="danger">x</Button> </Col>
    </Row>
    </ListGroupItem>
  );
}

export default ListaItem;
