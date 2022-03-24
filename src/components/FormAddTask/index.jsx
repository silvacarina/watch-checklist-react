import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function FormAddTask({ addTask }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const $form = event.target;
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const category = formData.get('category');

    const task = {
      title,
      checked: false,
      id: Date.now(),
      category,
    };

    addTask(task);
    $form.reset();
  };

  return (
    <form className="form" id="form-tasks" onSubmit={handleFormSubmit}>
      <div className="form-field">
        <label htmlFor="" className="form-field-label">Watch Checklist</label>
        <input type="text" name="title" required className="form-field-input" placeholder="Insira um filme ou uma série" />
        <button type="submit" className="form-button">Inserir</button>
      </div>
      <div className="input-type-container">
        <label className="input-type">
          <input type="radio" name="category" value="movie" defaultChecked />
          <span>Filme</span>
        </label>
        <label className="input-type">
          <input type="radio" name="category" value="serie" />
          <span>Série</span>
        </label>
      </div>
    </form>
  );
}

FormAddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default FormAddTask;
