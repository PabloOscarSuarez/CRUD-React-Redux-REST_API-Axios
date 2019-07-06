import { MOSTRAR_PRODUCTOS } from "./type";
import axios from "axios";

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get("http://localhost:5000/productos");

  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
};
//   axios.get("http:/localhost:5000/productos").then(data => {
//     dispatch({
//       type: MOSTRAR_PRODUCTOS,
//       payload: data
//     });
//   });
