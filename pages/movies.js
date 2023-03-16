import { useContext } from "react";
import Nav from "../components/navigation";
import MovieList from "../components/ui-components/movie-list";
import { dataContext } from "../context/dataContext";

const Movies = () => {
  const { movies: data } = useContext(dataContext);
  return (
    <>
      <Nav />
      <main className="main-content">
        <h1 className="title">Movies</h1>
        <MovieList data={data} />
      </main>
    </>
  );
};

export default Movies;
