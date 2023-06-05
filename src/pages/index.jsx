import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer'
const apikey = process.env.NEXT_PUBLIC_TMDB_API_KEY

const IndexPage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (mood) => {
    try {
      const totalPages = 5; // 取得するページ数を設定
      const moviesPerPage = 3; // 1ページあたりの映画数を設定
      const minVoteAverage = 7.8; // 評価の下限値を設定
      const promises = [];

      for (let page = 1; page <= totalPages; page++) {
        const response = axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=ja-JP&sort_by=popularity.desc&with_genres=${mood}&page=${page}&vote_average.gte=${minVoteAverage}`
        );
        promises.push(response);
      }

      const movieResponses = await Promise.all(promises);
      let allMovies = [];

      movieResponses.forEach((response) => {
        const movies = response.data.results;
        allMovies = [...allMovies, ...movies];
      });

      const randomMovies = getRandomMovies(allMovies, moviesPerPage);
      setMovies(randomMovies);
    } catch (error) {
      console.error(error);
    }
  };

  const getRandomMovies = (movies, count) => {
    const shuffled = movies.filter((movie) => movie.overview !== '');
    const randomSelection = shuffled.sort(() => 0.5 - Math.random());
    return randomSelection.slice(0, count);
  };

  return (
    <div>
      <Layout />
      <p className='text-3xl flex justify-center py-5'>Tell me your mood</p>
      <div className='flex justify-between mx-10 text-2xl'>
        <button onClick={() => fetchMovies('28','35','14')}>Happy</button>
        <button onClick={() => fetchMovies('18','10751')}>Sad</button>
        <button onClick={() => fetchMovies('12','27','53')}>Excited</button>
        <button onClick={() => fetchMovies('10749')}>Love</button>
      </div>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              詳細を見る
            </a>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage; 