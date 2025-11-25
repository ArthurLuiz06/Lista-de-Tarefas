import React, { Component } from "react";


// Form
import { FaPlus } from 'react-icons/fa'


// Terefas
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './main.css'

export default class Main extends Component {
  state = {
    novatarefa: '',
    tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novatarefa } = this.state;
    novatarefa = novatarefa.trim();

    if (tarefas.indexOf(novatarefa) !== -1) return

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas: [...novasTarefas, novatarefa],
    });
  }

  handleChange = (e) => {
    this.setState({
      novatarefa: e.target.value
    })
  }

  handleEdit = (e, index) => {
    console.log('Edit', index)
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    })
  }

  render() {
    const { novatarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novatarefa}>
          </input>
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((terefas, index) => (
            <li key={terefas}>
              {terefas}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit" />

                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete" />
              </span>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
