import Movie from "./treding-movie";

const MovieList = ({ data }) => {
  console.log(data);
  const moviesStructure = data.map((movie, index) => {
    return <Movie movie={movie} />;
  });
  return <div className="movie-list-container">{moviesStructure}</div>;
};

export default MovieList;
