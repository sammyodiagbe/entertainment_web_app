import Nav from "../components/navigation";
import MovieList from "../components/ui-components/movie-list";

const Series = () => {
  const { series: data } = useContext(dataContext);
  return (
    <>
      <Nav />
      <h1 className="title">Series</h1>
      <MovieList data={data} />
    </>
  );
};

export default Series;
