import React, { Component } from "react";

import { connect } from "react-redux";
import {
  mostrarProducto,
  editarProducto
} from "../../../redux/actions/productosActions";

class Index extends Component {
  state = {
    nombre: "",
    precio: "",
    error: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.props.mostrarProducto(this.props.match.params.id);
  }

  //se usa para hacer peticiones a una Api y meterla en nuestro estado
  componentWillReceiveProps(nextProps, nextState) {
    console.log(nextProps);
    const { nombre, precio } = nextProps.producto;
    this.setState({ nombre, precio });
  }

  editarProducto = e => {
    e.preventDefault(); // evita que se recargue la pagina
    console.log(this.props.match);
    const { nombre, precio } = this.state;
    if (nombre === "" || precio === "") {
      this.setState({ error: true });
      return; //corta el flujo de ejecucion
    }
    this.setState({ error: false });

    const post = {
      nombre: this.state.nombre,
      precio: this.state.precio,
      id: this.props.match.params.id
    };
    this.props.editarProducto(post);
    // this.setState({ nombre: "", precio: "" });
    this.props.history.push(`${process.env.PUBLIC_URL}/`);
  };

  render() {
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Editar Producto</h2>
              <form onSubmit={this.editarProducto}>
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="nombre"
                    defaultValue={this.state.nombre}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Precio del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Precio"
                    name="precio"
                    defaultValue={this.state.precio}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Editar
                </button>
              </form>
              {this.state.error ? (
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                  Todos los campos son requeridos
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  producto: state.productos.producto
});

const mapDispatchToProps = dispatch => {
  return {
    mostrarProducto: id => {
      dispatch(mostrarProducto(id));
    },
    editarProducto: producto => {
      dispatch(editarProducto(producto));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
