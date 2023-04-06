import React, { Component } from "react";
import Mapa from "./mapa";
import FormularioContactanos from "./FormularioContactanos";
import { Informacion } from "./Informacion";
export class Contenedor extends Component {
  render() {
    return (
      <div id="conocenos">
        <Mapa> </Mapa>

        <FormularioContactanos></FormularioContactanos>
        <Informacion></Informacion>
      </div>
    );
  }
}

export default Contenedor;
