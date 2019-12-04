import React, { Component } from "react";

export default class Formulario extends Component {
  busquedaRef = React.createRef();

  obtenerPalabra = e => {
    e.preventDefault();
    this.props.obtenerPalabra(this.busquedaRef.current.value);
  };

  render() {
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.obtenerPalabra}>
        <input
          className="form-control mr-sm-2"
          placeholder="Ingresa tu palabra"
          ref={this.busquedaRef}
          required="required"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Buscar..
        </button>
      </form>
    );
  }
}
