import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";

export default class Paginacion extends Component {
  onClickUp = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="">
        <button
          onClick={this.props.paginaAnterior}
          className="btn btn-success m-4"
        >
          Anterior &larr;
        </button>
        <button className="btn btn-danger" onClick={this.onClickUp}>
          &uarr;
        </button>
        <button
          onClick={this.props.paginaSiguiente}
          className="btn btn-success m-4"
        >
          Siguiente &rarr;
        </button>
      </div>
    );
  }
}
