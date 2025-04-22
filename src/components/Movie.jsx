import React, { useState } from 'react';
import { MovieModal } from './MovieModal';

function Movie({ Title, Year, imdbID, Type, Poster }) {
  const [showModal, setShowModal] = useState(false);
  const imdbUrl = `https://www.imdb.com/title/${imdbID}/`; // URL IMDb

  return (
    <>
      <div className="card">
        <div className="card-image">
          <a href={imdbUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
              alt={Title}
            />
          </a>
        </div>
        <div className="card-content">
          <span className="card-title">{Title}</span>
          <p>{Year} | {Type}</p>
        </div>
        <div className="card-action">
          <button className="btn orange darken-2" onClick={() => setShowModal(true)}>
            Подробнее
          </button>
        </div>
      </div>

      {showModal && <MovieModal imdbID={imdbID} onClose={() => setShowModal(false)} />}
    </>
  );
}

export { Movie };
