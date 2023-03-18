import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";
import Search from "../components/search-container";
import TrendingList from "../components/ui-components/trendingList";
import MovieList from "../components/ui-components/movie-list";
import { useContext, useState } from "react";
import { dataContext } from "../context/dataContext";

export default function Home() {
  const { allMovies: data } = useContext(dataContext);
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

  return (
    <>
      <Head>
        <title>Watch Movies or Series</title>
        <meta name="description" content="Built by Samson Odiagbe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <main className="main-content">
        <Search
          title={"Search for movies or TV series"}
          handleUserSearch={handleUserSearch}
        />
        {searchString.length > 0 && (
          <h1 className="title">
            Found {dataPlaceholder.length} results for {searchString}
          </h1>
        )}
        <TrendingList />
        <div className="grid-container">
          <h1 className="title">Recommended for you</h1>

          <MovieList data={dataPlaceholder} />
        </div>
      </main>
    </>
  );
}
