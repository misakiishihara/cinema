import React, { useState } from 'react';
import axios from 'axios';

const IndexPage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (mood) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d4a2b9fed55b0afbf4684b3e3a6f3e8b&language=ja-JP&sort_by=popularity.desc&with_genres=${mood}`
      );
      const randomMovies = getRandomMovies(response.data.results, 3);
      setMovies(randomMovies);
    } catch (error) {
      console.error(error);
    }
  };

  const getRandomMovies = (movies, count) => {
    const shuffled = movies.filter((movie) => movie.overview !== "");
    const randomSelection = shuffled.sort(() => 0.5 - Math.random());
    return randomSelection.slice(0, count);
  };

  return (
    <div>
      <h1>映画おすすめサイト</h1>
      <button onClick={() => fetchMovies(28)}>Happy</button>
      <button onClick={() => fetchMovies(18)}>Sad</button>
      <button onClick={() => fetchMovies(12)}>Excited</button>
      <button onClick={() => fetchMovies(10749)}>Love</button>
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
    </div>
  );
};

export default IndexPage;