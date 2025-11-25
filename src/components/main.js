import React, { Component } from "react";

import './main.css'

export default class Main extends Component {
    state = {
      novatarefa: '',
    };

     inputMudou = (e) => {
      this.setState({
        novatarefa: e.target.value
      })
     }

  render() {
    const {novatarefa} = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#">
          <input onChange={this.inputMudou} type="text"></input>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
