import { createContext, useState } from "react";
import stripAndPopulateData from "../utils/data-strip";

export const dataContext = createContext(null);

const DataContextProvider = ({ children }) => {
  const data = stripAndPopulateData();
  const { allMovies: fullMovieList, bookmark, series, movies } = data;
  const [allMovies, _] = useState(fullMovieList);
  const [seriesCategory, __] = useState(series);
  const [bookmarks, ___] = useState(bookmark);
  const [moviesCategory, ____] = useState(movies);

  return <dataContext.Provider value={{}}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
