import React from 'react'
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './tarefas.css'

export default function Tarefas({tarefas, handleDelete, handleEdit}) {
  return(
      <ul className="tarefas">
          {tarefas.map((terefas, index) => (
            <li key={terefas}>
              {terefas}
              <span>
                <FaEdit
                  onClick={(e) =>handleEdit(e, index)}
                  className="edit" />

                <FaWindowClose
                  onClick={(e) =>handleDelete(e, index)}
                  className="delete" />
              </span>
            </li>
          ))}
        </ul>
  )
}

Tarefas.propTypes = {
  terefas: PropTypes.array.isRequired,
  handleEdit : PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
