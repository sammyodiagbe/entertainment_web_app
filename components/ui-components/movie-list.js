import Movie from "./treding-movie";

const MovieList = ({ data }) => {
  const moviesStructure = data.map((movie, index) => {
    return <Movie movie={movie} key={index} />;
  });
  return <div className="movie-list-container">{moviesStructure}</div>;
};

export default MovieList;
