import React from "react";

function NuevoProducto({ evento, nuevoProducto, estado }) {
  const { nombre, precio, error } = estado;
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Agregar Nuevo Producto</h2>
            <form onSubmit={nuevoProducto}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={evento}
                />
              </div>
              <div className="form-group">
                <label>Precio del Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio"
                  name="precio"
                  value={precio}
                  onChange={evento}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {error ? (
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

export default NuevoProducto;
