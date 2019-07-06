import { combineReducers } from "redux";
import { mostrarProductos } from "./productosReducer";
export default combineReducers({
  productos: mostrarProductos
});
