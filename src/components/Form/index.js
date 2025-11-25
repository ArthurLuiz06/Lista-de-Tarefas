import React from 'react';

import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa'

import './Form.css'

export default function Form({handleChange, handleSubmit, novatarefa}) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        value={novatarefa}>
      </input>
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}



Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novatarefa: PropTypes.string.isRequired,
}


