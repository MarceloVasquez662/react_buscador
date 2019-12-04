import React, { Component } from "react";
import Imagen from "./Imagen";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div
          className="jumbotron text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        >
          <h2>Resultados para "{this.props.palabra}"</h2>
          <p>Para visualizar las imagenes en mejor calidad, presiona Ver</p>
        </div>
        <div className="col-12 row justify-content-center">
          {this.props.imagenes.map(imagen => (
            <Imagen imagen={imagen} key={imagen.id} />
          ))}
        </div>
      </div>
    );
  }
}
