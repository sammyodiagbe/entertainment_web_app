import { useContext } from "react";
import { dataContext } from "../../context/dataContext";
import Movie from "./treding-movie";

const MovieList = ({ data }) => {
  const moviesStructure = data.map((movie, index) => {
    return <Movie movie={movie} />;
  });
  return <div className="movie-list-container">{moviesStructure}</div>;
};

export default MovieList;
