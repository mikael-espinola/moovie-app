import Container from "./Container";
import "../../style/Header.css";
import Input from "../Form/Input";
import { useState } from "react";
import CategoriesMenu from "./CategoriesMenu";

const Header = ({ setChoseCategory, setSearch }) => {
  const [isVisible, setIsVisible] = useState(false);

  const HandleClick = () => {};
  const HandleClickHome = () => {
    window.history.pushState({}, "", "/");
    window.location.reload();
  };

  return (
    <header className="title_name border_bottom">
      <Container>
        <h1 onClick={HandleClickHome}>
          Moovie <span>Your Favourite Finder Movie</span>
        </h1>
        <ul className="list">
          <li className="item">
            <span onClick={HandleClickHome}>Home</span>
          </li>
          <li id="categoryButton" className="item">
            <span onClick={() => setIsVisible(!isVisible)}>
              Categorias
              <CategoriesMenu
                setChoseCategory={setChoseCategory}
                isVisible={isVisible}
              />
            </span>
          </li>
          <li className="item">
            <span onClick={HandleClick}>Login</span>
          </li>
          <li className="item">
            <span className="input_search">
              <Input
                placeholder="Pesquise..."
                type="text"
                setSearch={setSearch}
              />
            </span>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
