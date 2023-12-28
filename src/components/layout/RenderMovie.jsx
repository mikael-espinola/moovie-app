import { useState } from "react";
import useApiTmdb from "../hooks/useApiTmdb";

import ButtonToUp from "./ButtonToUp";
import BuildURLImage from "./BuildURLImage";
import MovieDialog from "./MovieDialog";
import useFindGenreId from "../hooks/useFindGenreId";
import useMovieListByName from "../hooks/useMovieListByName";
import ErrorScreen from "../errorScreen/ErrorScreen";

const getCategoryId = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get("category");
};
const getSearch = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get("search");
};

const RenderCardMovie = ({ choseCategory, inputSearch }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);
  let { moviesDataTwo } = useApiTmdb();
  let { moviesByCategory } = useFindGenreId(choseCategory);
  let { moviesListByName } = useMovieListByName(inputSearch);

  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie);
    setIsOpenModal(true);
  };

  let renderCardMovies;

  if (getCategoryId()) {
    renderCardMovies = moviesByCategory;
  } else if (getSearch()) {
    renderCardMovies = moviesListByName;
  } else {
    renderCardMovies = moviesDataTwo;
  }

  return (
    <>
      <div className="template-movie-container">
        {renderCardMovies.length === 0 ? (
          <ErrorScreen inputSearch={inputSearch} />
        ) : (
          renderCardMovies.map((movie) => (
            <div className="card-movie" key={movie.id}>
              <h1 className="title">{movie.title}</h1>
              <div
                className="img-movie"
                onClick={() => handleSelectedMovie(movie)}
              >
                <BuildURLImage url={movie.poster_path} />
              </div>
              <div className="score">
                <p>{Math.round(movie.vote_average) + ".0"}</p>
              </div>
              <button
                className="info-button"
                onClick={() => handleSelectedMovie(movie)}
              >
                <h4 className="template-button--text">More info!</h4>
              </button>
            </div>
          ))
        )}
      </div>
      <ButtonToUp />
      <MovieDialog
        selectedMovie={selectedMovie}
        isOpen={isOpenModal}
        setOpenModal={() => setIsOpenModal(!isOpenModal)}
      />
    </>
  );
};

export default RenderCardMovie;
