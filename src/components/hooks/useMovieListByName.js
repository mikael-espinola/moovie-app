import React, { useEffect, useState } from "react";

export default function useMovieListByName(movieName) {
  const [moviesListByName, setMoviesListByName] = useState([]);

  useEffect(() => {
    if (!movieName) return;
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((resp) => resp.json())
      .then((json) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        let searchs = json.results;
        if (searchs.length === 0) {
          setMoviesListByName([]);
        }
        setMoviesListByName(searchs);
      });
  }, [movieName]);

  return {
    moviesListByName,
  };
}
