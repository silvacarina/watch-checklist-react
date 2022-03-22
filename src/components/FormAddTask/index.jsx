import React from 'react';
import './style.css';

function FormAddTask() {
  return (
    <form className="form">
      <div className="form-field">
        <label htmlFor="" className="form-field-label">Watch Checklist</label>
        <input type="text" name="title" required className="form-field-input" placeholder="Insira um filme ou uma série" />
        <button type="submit" className="form-button">Inserir</button>
      </div>
      <div className="input_type_container">
        <label className="input_type">
          <input type="radio" name="category" value="movie" checked />
          <span>Filme</span>
        </label>
        <label className="input_type">
          <input type="radio" name="category" value="serie" />
          <span>Série</span>
        </label>
      </div>
    </form>
  );
}

export default FormAddTask;
