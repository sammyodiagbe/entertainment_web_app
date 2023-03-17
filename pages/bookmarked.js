import { useContext } from "react";
import Nav from "../components/navigation";
import MovieList from "../components/ui-components/movie-list";
import { dataContext } from "../context/dataContext";
import Search from "../components/search-container";

const Bookmarked = () => {
  const { bookmarks: data } = useContext(dataContext);
  console.log(data);
  return (
    <>
      <Nav />
      <main className="main-content">
        <Search />
        <h1 className="title">Bookmarked Movies</h1>
        <div className="grid-container">
          <MovieList data={data} />
        </div>
      </main>
    </>
  );
};

export default Bookmarked;
