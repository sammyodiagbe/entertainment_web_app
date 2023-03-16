import IconBookmarkEmpty from "../icons/icon-bookmark-empty";
import CustomImage from "../image";
import IconBookmarkFull from "../icons/icon-bookmark-full";

const Movie = ({ movie }) => {
  const {
    isBookmarked,
    title,
    year,
    category,
    thumbnail: { regular },
  } = movie;
  const { large: path } = regular;
  const ThumbNail = <CustomImage path={path} />;
  return (
    <div className="trending-movie-container">
      {ThumbNail}
      <div className="movie-details">
        <ul>
          <li>{year}</li>
          <li>{category}</li>
        </ul>
        <h1 className="movie-title">{title}</h1>
      </div>
      <button className={`bookmark-btn bookmarked`}>
        {isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
      </button>
    </div>
  );
};

export default Movie;
