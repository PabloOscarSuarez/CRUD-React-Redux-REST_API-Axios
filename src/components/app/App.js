import React, { Component, Fragment } from "react";
import Header from "../Header/Header";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Productos from "../Productos/ListaProductos";
import NuevoProducto from "../Productos/NuevoProducto";
import EditarProducto from "../Productos/EditarProductos";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={Productos}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/productos/nuevo`}
                component={NuevoProducto}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/productos/editar/:id`}
                component={EditarProducto}
              />
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}
