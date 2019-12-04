import React, { Component } from "react";

export default class Imagen extends Component {
  render() {
    return (
      <div
        className="card col-12 col-sm-6 col-md-3 col-lg-2 m-2 p-0 text-white"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div>
          <img
            src={this.props.imagen.previewURL}
            alt=""
            className="card-img-top"
          ></img>
        </div>
        <div className="card-body text-center">
          <h5 className="card-text">{this.props.imagen.user}</h5>
          <p className="card-text">Vistas: {this.props.imagen.views}</p>
          <p className="card-text">Likes: {this.props.imagen.likes}</p>
        </div>
        <div className="card-footer text-center">
          <a
            className="btn btn-success btn-block"
            href={this.props.imagen.largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver
          </a>
        </div>
      </div>
    );
  }
}
