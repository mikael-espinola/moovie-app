import "./style/App.css";

import Header from "./components/layout/Header";
import RenderMain from "./components/Main";
import { useState } from "react";

const getCategoryId = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get("category");
};
const getSearch = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get("search");
};

function App() {
  const [choseCategory, setChoseCategory] = useState(getCategoryId());
  const [inputSearch, setSearch] = useState(getSearch());

  return (
    <>
      <Header setSearch={setSearch} setChoseCategory={setChoseCategory} />
      <RenderMain inputSearch={inputSearch} choseCategory={choseCategory} />
    </>
  );
}

export default App;
