import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function FormAddMedia({ addMedia }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const $form = event.target;
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const category = formData.get('category');

    const media = {
      title,
      checked: false,
      id: Date.now(),
      category,
    };

    addMedia(media);
    $form.reset();
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-field">
        <label htmlFor="field-title" className="form-field-label">Watch Checklist</label>
        <input id="field-title" type="text" name="title" required className="form-field-input" placeholder="Insira um filme ou uma série" />
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

FormAddMedia.propTypes = {
  addMedia: PropTypes.func.isRequired,
};

export default FormAddMedia;
