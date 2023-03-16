import IconBookmarkEmpty from "../icons/icon-bookmark-empty";
import CustomImage from "../image";
import IconBookmarkFull from "../icons/icon-bookmark-full";

const Movie = ({ movie }) => {
  console.log(movie);
  const {
    isBookmarked,
    title,
    year,
    category,
    thumbnail: { trending },
  } = movie;

  const ThumbNail = <CustomImage path={trending} />;
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
