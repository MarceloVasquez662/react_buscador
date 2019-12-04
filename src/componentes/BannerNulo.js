import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div
          className="jumbotron text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        >
          <h2>No hay resultados para "{this.props.palabra}"</h2>
          <p>Por favor, intente con otra palabra</p>
        </div>
      </div>
    );
  }
}
