const BuildURLImage = ({ url }) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500/${url}`} alt="poster" />
    </>
  );
};

export default BuildURLImage;
