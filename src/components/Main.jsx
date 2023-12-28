import "../style/Main.css";

import RenderCardMovie from "./layout/RenderMovie";

const RenderMain = ({ choseCategory, inputSearch }) => {
  return (
    <>
      <RenderCardMovie
        inputSearch={inputSearch}
        choseCategory={choseCategory}
      />
    </>
  );
};

export default RenderMain;
