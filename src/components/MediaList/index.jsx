import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function MediaList({
  title,
  medias,
  removeMedia,
  updateMediaChecked,
}) {
  return (
    <section className="medias-section medias-movies">
      <h2 className="medias-section__title">{title}</h2>
      <ul className="medias-section__list" id="list-movies">
        {
        medias.map((currentMedia) => (
          <li className="medias-section__item" key={currentMedia.id}>
            <label className="medias-section__item__label">
              <input checked={currentMedia.checked} className="medias-section__item__checkbox" type="checkbox" onChange={() => { updateMediaChecked(currentMedia); }} />
              <span className="medias-section__item__text">{currentMedia.title}</span>
            </label>
            <button type="button" className="medias-section__item__remove" onClick={() => { removeMedia(currentMedia); }}>X</button>
          </li>
        ))
      }
      </ul>
    </section>
  );
}

MediaList.propTypes = {
  removeMedia: PropTypes.func.isRequired,
  updateMediaChecked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  medias: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default MediaList;
