import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import Logo from '../Logo';
import FormAddMedia from '../FormAddMedia';
import MediaList from '../MediaList';
import './style.css';

function App() {
  const [medias, setMedias] = useLocalStorageState('media', {
    defaultValue: [],
  });

  const mediasMovie = medias.filter((media) => media.checked === false && media.category === 'movie');
  const mediasMoviesWatched = medias.filter((media) => media.checked === true && media.category === 'movie');
  const mediasSerie = medias.filter((media) => media.checked === false && media.category === 'serie');
  const mediasSeriesWatched = medias.filter((media) => media.checked === true && media.category === 'serie');

  const addMedia = (media) => {
    const newMedias = [...medias];
    newMedias.push(media);
    setMedias(newMedias);
  };

  const removeMedia = (media) => {
    const newMedias = [...medias];
    const mediaToRemove = medias.findIndex((item) => item.id === media.id);
    newMedias.splice(mediaToRemove, 1);
    setMedias(newMedias);
  };

  const updateMediaChecked = (media) => {
    const newMedias = [...medias];
    const mediaToUpdate = newMedias.findIndex((item) => item.id === media.id);
    newMedias[mediaToUpdate].checked = !newMedias[mediaToUpdate].checked;
    setMedias(newMedias);
  };
  return (
    <div className="app">
      <div className="app-container">
        <Logo />
        <FormAddMedia addMedia={addMedia} />
      </div>
      <div className="app-form-container">
        <MediaList title="Filmes" medias={mediasMovie} removeMedia={removeMedia} updateMediaChecked={updateMediaChecked} />
        <MediaList title="Filmes Assistidos" medias={mediasMoviesWatched} removeMedia={removeMedia} updateMediaChecked={updateMediaChecked} />
      </div>
      <div className="app-form-container">
        <MediaList title="Séries" medias={mediasSerie} removeMedia={removeMedia} updateMediaChecked={updateMediaChecked} />
        <MediaList title="Séries Assistidas" medias={mediasSeriesWatched} removeMedia={removeMedia} updateMediaChecked={updateMediaChecked} />
      </div>
    </div>
  );
}

export default App;
