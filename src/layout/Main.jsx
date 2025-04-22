import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';
import { EmptyResult } from '../components/EmptyResult';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=a8d4cb07&s=Matrix`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'False') {
          setError(data.Error);
        } else {
          setMovies(data.Search);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError('Ошибка загрузки данных');
      });
  }, []);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);
    setError('');
    fetch(`https://www.omdbapi.com/?apikey=a8d4cb07&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'False') {
          setError(data.Error);
          setMovies([]);
        } else {
          setMovies(data.Search);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError('Ошибка загрузки данных');
      });
  };

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? (
        <Preloader />
      ) : (
        <>
          {error ? <EmptyResult /> : <Movies movies={movies} />}
        </>
      )}
    </main>
  );
}

export { Main };
