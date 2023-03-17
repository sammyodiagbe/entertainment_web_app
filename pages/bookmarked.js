import { useContext, useState } from "react";
import Nav from "../components/navigation";
import MovieList from "../components/ui-components/movie-list";
import { dataContext } from "../context/dataContext";
import Search from "../components/search-container";

const Bookmarked = () => {
  const { bookmarks: data } = useContext(dataContext);
  const [dataPlaceholder, setDataPlaceholder] = useState(data);
  const [searchString, setSearchString] = useState("");

  const handleUserSearch = (searchQuery) => {
    if (searchQuery === "" || searchQuery === null) {
      setDataPlaceholder(data);
      setSearchString("");
      return;
    }

    const newData = dataPlaceholder.filter((movie, index) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDataPlaceholder(newData);
    setSearchString(searchQuery);
  };
  console.log(data);
  return (
    <>
      <Nav />
      <main className="main-content">
        <Search
          title="Search your bookmarked show"
          handleUserSearch={handleUserSearch}
        />
        {searchString.length > 0 && (
          <h1 className="title">
            Found {dataPlaceholder.length} results for "{searchString}"
          </h1>
        )}
        <h1 className="title">Bookmarked Movies</h1>
        <div className="grid-container">
          <MovieList data={data} />
        </div>
      </main>
    </>
  );
};

export default Bookmarked;
