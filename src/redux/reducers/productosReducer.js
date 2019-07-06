import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO } from "../actions/type";

//en los reducer nunca van los llamados a los axios

const initialState = {
  productos: []
};

export const mostrarProductos = (state = initialState, action) => {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return { ...state, productos: action.payload };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter(
          producto => producto.id !== action.payload
        )
      };
    default:
      return state;
  }
};
