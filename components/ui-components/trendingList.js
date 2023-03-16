import { useContext } from "react";
import { dataContext } from "../../context/dataContext";
import Movie from "./treding-movie";

const TrendingList = () => {
  const { trending } = useContext(dataContext);

  const trendingStructure = trending.map((movie, index) => (
    <Movie key={index} movie={movie} />
  ));
  return (
    <section className="trending-list">
      <h1 className="title">Trending</h1>
      <div className="trending">{trendingStructure}</div>
    </section>
  );
};

export default TrendingList;
