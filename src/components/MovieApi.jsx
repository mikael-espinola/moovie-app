import { useEffect } from "react";

const GetInfoMovieApi = ({ setMoviesData }) => {
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=076303602f7514021035784afd095d24&page=1`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const moviesArray = data.results || [];
        setMoviesData(moviesArray);
      });
  }, [setMoviesData]);
  return null;
};
export default GetInfoMovieApi;
