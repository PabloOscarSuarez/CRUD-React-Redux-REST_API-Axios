import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { borrarProducto } from "../../../redux/actions/productosActions";

class Producto extends Component {
  render() {
    const { id, nombre, precio } = this.props.info;
    const { eliminarProducto } = this.props;
    return (
      <li className=" list-group-item">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 d-flex justify-content-between align-items-center">
            <p className="text-dark m-0">{nombre}</p>
            <span className="badge badge-warning text-dark">$ {precio}</span>
          </div>
          <div className="col-md-4 justify-content-end acciones">
            <Link to={`/producto/editar/${id}`}>
              <button className="btn btn-primary mr-2">Editar</button>
            </Link>
            <button
              onClick={() => eliminarProducto(id)}
              type="button"
              className="btn btn-danger"
            >
              Borrar
            </button>
          </div>
        </div>
      </li>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    eliminarProducto: id => {
      dispatch(borrarProducto(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Producto);
