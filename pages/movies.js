import { useContext } from "react";
import Nav from "../components/navigation";
import MovieList from "../components/ui-components/movie-list";
import { dataContext } from "../context/dataContext";
import Search from "../components/search-container";

const Movies = () => {
  const { allMovies: data } = useContext(dataContext);
  console.log(data);
  return (
    <>
      <Nav />
      <main className="main-content">
        <Search title={"Search for Movies"} />
        <h1 className="title">Movies</h1>
        <div className="grid-container">
          <MovieList data={data} />
        </div>
      </main>
    </>
  );
};

export default Movies;
