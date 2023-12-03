import React from "react";
import "../style/Main.css";

const buildURLImage = (URLImage) =>
  `https://image.tmdb.org/t/p/w500/${URLImage}`;

const goToUpButton = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const RenderCardMovie = ({ moviesData }) => {
  return (
    <div className="template-movie-container">
      {moviesData.map((movie) => (
        <div className="card-movie" key={movie.id}>
          <h1 className="title">{movie.title}</h1>
          <div className="img-movie">
            <img src={buildURLImage(movie.poster_path)} alt="poster" />
          </div>
          <div className="score">
            <p>{movie.vote_average}</p>
          </div>
          <button className="info-button">
            <h4 className="template-button--text">More info!</h4>
          </button>
        </div>
      ))}
      <div className="button-to-up--container">
        <button className="button-to-up" onClick={goToUpButton}>
          <label>UP</label>
        </button>
      </div>
    </div>
  );
};

export default RenderCardMovie;
