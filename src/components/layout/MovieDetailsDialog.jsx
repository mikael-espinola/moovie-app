import { IoMdClose } from "react-icons/io";
import BuildURLImage from "./BuildURLImage";
import "../../style/MovieDetailsDialog.css";
import "../../style/Loader.css";
import useApiTmdb from "../hooks/useApiTmdb";
import { useState } from "react";

const RenderMovieDetailsDialog = ({
  selectedMovie,
  isOpen,
  setIsOpenModal,
}) => {
  const [urlTrailer, setUrlTrailer] = useState("");

  const { genreData } = useApiTmdb();
  const movieCategories = selectedMovie.genre_ids;
  const categories = genreData
    .filter((genreId) => movieCategories.includes(genreId.id))
    .map((genre) => genre.name);

  const vote_average = Math.round(selectedMovie.vote_average);

  const movieTitle = `${selectedMovie.title} Official movie trailer`;
  let movieTrailerName = movieTitle.replace(/ /g, "+");

  fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_KEY}&q=${movieTrailerName}&type=video`
  )
    .then((resp) => resp.json())
    .then((json) => {
      let videoId = json.items[0].id.videoId;
      let urlTrailer = `https://www.youtube.com/embed/${videoId}`;
      setUrlTrailer(urlTrailer);
    });

  return (
    <>
      <dialog className="modal_container" open={isOpen}>
        <div className="header_container">
          <div className="close_button_container">
            <div className="close_button" onClick={setIsOpenModal}>
              <IoMdClose />
            </div>
          </div>
          <h1>{selectedMovie.title}</h1>
        </div>

        <main className="description_container">
          <div className="img_container">
            <BuildURLImage url={selectedMovie.poster_path} />
          </div>
          <div className="details_container">
            <div className="description_overview">
              <h4>{selectedMovie.overview}</h4>
              <div className="border_container">
                <div className="border" />
              </div>
            </div>
            <div className="details_info">
              <span className="details_skeleton">
                Score: <span>{vote_average + ".0"}</span>
              </span>
              <span className="details_skeleton">
                Released On: <span>{selectedMovie.release_date}</span>
              </span>
              <span className="details_skeleton">
                Genre(s): {categories.join(", ")}
              </span>
            </div>
            <div className="border_container">
              <div className="border" />
            </div>
            <div className="iframe_container">
              <iframe
                className="iframe-trailer"
                name="trailer"
                allowFullScreen
                width="500"
                height="350"
                src={urlTrailer}
              ></iframe>
            </div>
          </div>
        </main>
      </dialog>
    </>
  );
};

export default RenderMovieDetailsDialog;
