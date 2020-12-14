import './ListaItem.css';

import { Elemento } from './../../Models';

function ListaItem(props) {
  return (
    <li className="ListaItem">
    {props.item.nombre}
    </li>
  );
}

export default ListaItem;
