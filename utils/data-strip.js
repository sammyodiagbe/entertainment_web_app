import data from "../data/data.json";

const stripAndPopulateData = () => {
  const bookmark = [];
  const allMovies = [...data];
  const series = [];
  const movies = [];
  const trending = [];

  for (let movie of allMovies) {
    const { category, isBookmarked, isTrending } = movie;
    if (category === "TV Series") {
      series.push(movie);
    } else if (category === "Movie") {
      movies.push(movie);
    }

    if (isBookmarked) {
      bookmark.push(movie);
    }

    if (isTrending) {
      trending.push(movie);
    }
  }

  return {
    bookmark,
    allMovies,
    movies,
    series,
    trending,
  };
};

export default stripAndPopulateData;
