import React, { useEffect, useState, useRef } from 'react';

function MovieModal({ imdbID, onClose }) {
  const [movieData, setMovieData] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    // Загружаем данные фильма
    fetch(`https://www.omdbapi.com/?apikey=a8d4cb07&i=${imdbID}`)
      .then(res => res.json())
      .then(data => setMovieData(data));

    // Инициализируем модалку, когда она отрисована
    const instance = window.M.Modal.init(modalRef.current, {
      onCloseEnd: onClose
    });
    instance.open();

    // Отключаем прокрутку страницы при открытии модалки
    document.body.style.overflow = 'hidden';

    // Убираем инициализацию при размонтировании и восстанавливаем прокрутку
    return () => {
      instance.destroy();
      document.body.style.overflow = 'auto'; // Включаем прокрутку снова
    };
  }, [imdbID, onClose]);

  return (
    <div id="modal1" className="modal" ref={modalRef}>
      <div className="modal-content">
        {movieData ? (
          <>
            <h4>{movieData.Title}</h4>
            <p><strong>Год:</strong> {movieData.Year}</p>
            <p><strong>Жанр:</strong> {movieData.Genre}</p>
            <p><strong>Режиссёр:</strong> {movieData.Director}</p>
            <p><strong>Сюжет:</strong> {movieData.Plot}</p>
            <p><strong>IMDb Рейтинг:</strong> {movieData.imdbRating}</p>
          </>
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
      <button
        onClick={onClose}
        className="modal-close btn orange darken-2 close-btn"
      >
        ×
      </button>
    </div>
  );
}

export { MovieModal };
