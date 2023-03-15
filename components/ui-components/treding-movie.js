import IconBookmarkEmpty from "../icons/icon-bookmark-empty";
import IconBookmarkFull from "./icons/icon-bookmark-full";

const TrendingMovie = ({ movie }) => {
  const { isBookmarked } = movie;
  return (
    <div className="trending-movie-container">
      <div className="movie-details"></div>
      <button className={`bookmark-btn bookmarked`}>
        {isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
      </button>
    </div>
  );
};

export default TrendingMovie;
