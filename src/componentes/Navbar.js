import React, { Component } from "react";
import logo from "../logo.svg";
import Formulario from "./Formulario";

export default class Navbar extends Component {
  obtenerPalabra = palabra => {
    this.props.obtenerPalabra(palabra);
  };

  render() {
    return (
      <nav
        className="navbar navbar-dark navbar-expand-lg"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <a href="#" className="navbar-brand">
          <img src={logo} width="30" height="30" />
        </a>
        <button
          className="navbar-toggler"
          data-target="#menuColapse"
          data-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menuColapse">
          <div className="navbar-nav">
            <Formulario obtenerPalabra={this.obtenerPalabra} />
          </div>
        </div>
      </nav>
    );
  }
}
