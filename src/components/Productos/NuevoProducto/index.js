import React, { Component, Fragment } from "react";
import NuevoProducto from "./NuevoProducto";
import { connect } from "react-redux";

//actions
import { agregarProducto } from "../../../redux/actions/productosActions";

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

  nuevoProducto = e => {
    e.preventDefault(); // evita que se recargue la pagina
    const { nombre, precio } = this.state;
    if (nombre === "" || precio === "") {
      this.setState({ error: true });
      return; //corta el flujo de ejecucion
    }
    this.setState({ error: false });

    const post = {
      nombre: this.state.nombre,
      precio: this.state.precio
    };
    this.props.agregarPost(post);
    this.setState({ nombre: "", precio: "" });
    this.props.history.push(`${process.env.PUBLIC_URL}/`);
  };
  render() {
    return (
      <Fragment>
        <NuevoProducto
          evento={this.handleChange}
          nuevoProducto={this.nuevoProducto}
          estado={this.state}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    agregarPost: post => {
      dispatch(agregarProducto(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Index);
