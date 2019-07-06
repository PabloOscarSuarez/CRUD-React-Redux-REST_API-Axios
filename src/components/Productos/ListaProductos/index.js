import React, { Component, Fragment } from "react";
import { ListaProductos } from "./Productos";
import { connect } from "react-redux";
import { mostrarProductos } from "../../../redux/actions/productosActions";

class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }

  render() {
    return (
      <Fragment>
        <ListaProductos productos={this.props.productos} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  productos: state.productos.productos
});
const mapDispatchToProps = dispatch => {
  return {
    mostrarProductos: () => {
      dispatch(mostrarProductos());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Productos);
