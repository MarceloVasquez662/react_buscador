import React, { Component } from "react";
import Navbar from "./componentes/Navbar";
import Banner from "./componentes/Banner";
import Paginacion from "./componentes/Paginacion";
import BannerNulo from "./componentes/BannerNulo";

export default class App extends Component {
  state = {
    palabra: "",
    imagenes: [],
    pagina: ""
  };

  obtenerPalabra = palabra => {
    this.setState({ palabra: palabra, pagina: 1 }, this.consultarApi);
  };

  consultarApi = () => {
    const url = `https://pixabay.com/api/?key=14458270-27089a7334cb422aa9bab0ba3&q=${this.state.palabra}&per_page=30&page=${this.state.pagina}`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => {
        this.setState({ imagenes: resultado.hits });
      });
  };

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina === 1) {
      return null;
    } else {
      pagina -= 1;
      this.setState({ pagina: pagina }, this.consultarApi);
    }
  };

  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina += 1;
    this.setState({ pagina: pagina }, this.consultarApi);
  };

  render() {
    return (
      <section>
        <div>
          <Navbar obtenerPalabra={this.obtenerPalabra} />
        </div>
        <div>
          {this.state.imagenes.length !== 0 ? (
            <Banner
              imagenes={this.state.imagenes}
              palabra={this.state.palabra}
            />
          ) : (
            this.state.palabra != "" && (
              <BannerNulo palabra={this.state.palabra} />
            )
          )}
        </div>
        <div className="row justify-content-center">
          {this.state.imagenes.length !== 0 && (
            <Paginacion
              paginaAnterior={this.paginaAnterior}
              paginaSiguiente={this.paginaSiguiente}
            />
          )}
        </div>
      </section>
    );
  }
}
