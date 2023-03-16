import { useContext } from "react";
import { dataContext } from "../../context/dataContext";
import TrendingMovie from "./treding-movie";

const TrendingList = () => {
  const { trending } = useContext(dataContext);

  const trendingStructure = trending.map((movie, index) => (
    <TrendingMovie key={index} movie={movie} />
  ));
  return <section className="trending-list">{trendingStructure}</section>;
};

export default TrendingList;
