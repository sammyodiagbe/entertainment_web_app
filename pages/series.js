import Nav from "../components/navigation";
import MovieList from "../components/ui-components/movie-list";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import Search from "../components/search-container";
const Series = () => {
  const { seriesCategory: data } = useContext(dataContext);
  return (
    <>
      <Nav />
      <Search />
      <main className="main-content">
        <h1 className="title">Series</h1>

        <div className="grid-container">
          <MovieList data={data} />
        </div>
      </main>
    </>
  );
};

export default Series;
