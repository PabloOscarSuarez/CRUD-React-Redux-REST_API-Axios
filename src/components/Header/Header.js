import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
        <h1>
          <Link to={`${process.env.PUBLIC_URL}/`} className="text-light">
            ALMACEN DE PRODUCTOS (click aqui para obtener lista de productos)
          </Link>
        </h1>
        <Link to={`${process.env.PUBLIC_URL}/productos/nuevo`}>
          <button type="button" className="btn btn-danger nuevo-post">
            Agregar producto &#43;
          </button>
        </Link>
      </nav>
    );
  }
}
