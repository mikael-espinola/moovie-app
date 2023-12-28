import { useEffect, useRef, useState } from "react";

export default function useApiTmdb() {
  const [moviesDataTwo, setMoviesData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const [page, setPage] = useState(1);
  const loadingRef = useRef(false);

  const key = "076303602f7514021035784afd095d24";

  useEffect(() => {
    const handleScroll = () => {
      let totalHeight = document.documentElement.scrollHeight;
      let visibleHeight = window.innerHeight;
      let scroll = window.scrollY;
      const percentage = (scroll / (totalHeight - visibleHeight)) * 100;

      if (percentage > 60 && !loadingRef.current) {
        setPage((prevPage) => prevPage + 1);
        loadingRef.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}`
      ),
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&page=1`
      ),
    ])
      .then(([moviesResp, genresResp]) =>
        Promise.all([moviesResp.json(), genresResp.json()])
      )
      .then(([moviesData, genresData]) => {
        if (page === 1) {
          setMoviesData(moviesData.results);
        } else {
          setMoviesData((prevMoviesData) => [
            ...prevMoviesData,
            ...moviesData.results,
          ]);
        }
        setGenreData(genresData.genres);
      })
      .finally(() => {
        loadingRef.current = false;
      });
  }, [page]);

  return {
    moviesDataTwo,
    genreData,
    categoryId,
  };
}
