import { useEffect, useRef, useState } from "react";

export default function useFindGenreId(id) {
  const [moviesByCategory, setMoviesByCategory] = useState([]);
  const [page, setPage] = useState(1);
  const loadingRef = useRef(false);
  const [prevId, setPrevId] = useState(0);

  useEffect(() => {
    if (prevId !== id) {
      setPrevId(id);
      setPage(1);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id, prevId]);

  useEffect(() => {
    const handleScroll = () => {
      let totalHeight = document.documentElement.scrollHeight;
      let visibleHeight = window.innerHeight;
      let scroll = window.scrollY;
      const percentage = (scroll / (totalHeight - visibleHeight)) * 100;

      if (percentage > 50 && !loadingRef.current) {
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
    if (!id) return;

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=${id}&page=${page}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (page === 1) {
          setMoviesByCategory(data.results || []);
        } else {
          setMoviesByCategory((prevMoviesData) => [
            ...(prevMoviesData || []),
            ...(data.results || []),
          ]);
        }
      })
      .finally(() => {
        loadingRef.current = false;
      });
  }, [id, page]);

  return {
    moviesByCategory,
  };
}
