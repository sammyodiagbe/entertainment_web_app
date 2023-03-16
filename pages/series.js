import Nav from "../components/navigation";
import MovieList from "../components/ui-components/movie-list";
import { useContext } from "react";
import { dataContext } from "../context/dataContext";
const Series = () => {
  const { seriesCategory: data } = useContext(dataContext);
  return (
    <>
      <Nav />
      <h1 className="title">Series</h1>
      <MovieList data={data} />
    </>
  );
};

export default Series;
