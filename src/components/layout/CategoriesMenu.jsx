import useApiTmdb from "../hooks/useApiTmdb";

import "../../style/GenresContainer.css";
import { useEffect, useState } from "react";

const CategoriesMenu = ({ isVisible, setChoseCategory }) => {
  const { genreData } = useApiTmdb();
  const [categoryId, setCategoryId] = useState(null);

  const handleClick = (categoryName) => (e) => {
    if (categoryName === "All") {
      window.history.pushState({}, "", "/");
      window.location.reload();
      return;
    }
    e.preventDefault();
    const currentGenre = genreData.find((genre) => categoryName === genre.name);
    setCategoryId(currentGenre.id);
    setChoseCategory(currentGenre.id.toString());
  };

  useEffect(() => {
    if (categoryId === null) {
      window.history.pushState({}, "", "");
      return;
    }
    setUrl();
  }, [categoryId]);

  const setUrl = () => {
    let param = new URLSearchParams({ category: `${categoryId}` });
    window.history.pushState({}, "", `?${param.toString()}`);
  };

  if (isVisible) {
    return (
      <div className="genres-container">
        <ul>
          <li>
            <a key="0" onClick={handleClick("All")}>
              All
            </a>
          </li>
          {genreData.map((genre) => (
            <li key={genre.id}>
              <a onClick={handleClick(genre.name)}>{genre.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return;
  }
};

export default CategoriesMenu;
