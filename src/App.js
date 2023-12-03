import "./style/App.css";
import { useState } from "react";

import Header from "./components/layout/Header";
import GetInfoMovieApi from "./components/MovieApi";
import RenderCardMovie from "./components/Main";

function App() {
  let [moviesData, setMoviesData] = useState([]);

  return (
    <>
      <Header />;
      <GetInfoMovieApi setMoviesData={setMoviesData} />
      <RenderCardMovie moviesData={moviesData} />
    </>
  );
}

export default App;
