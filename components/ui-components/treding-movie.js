import IconBookmarkEmpty from "../icons/icon-bookmark-empty";
import CustomImage from "../image";
import IconBookmarkFull from "../icons/icon-bookmark-full";
import IconNavMovies from "../icons/icon-nav-movies";
import IconNavSeries from "../icons/icon-nav-series";

const Movie = ({ movie }) => {
  const {
    isBookmarked,
    title,
    year,
    category,
    rating,
    thumbnail: { regular },
  } = movie;
  const { large: path } = regular;
  const ThumbNail = <CustomImage path={path} />;
  return (
    <div className="movie-container">
      <div className="image-container">{ThumbNail}</div>
      <div className="movie-details">
        <div>
          <ul>
            <li>{year}</li>
            <li>
              &bull;
              <span className="icon">
                {category === "Movie" ? <IconNavMovies /> : <IconNavSeries />}
              </span>
              {category}
            </li>
            <li>&bull; {rating}</li>
          </ul>
          <h4 className="movie-title">{title}</h4>
        </div>
      </div>
      <button className={`bookmark-btn bookmarked`}>
        {isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
      </button>
    </div>
  );
};

export default Movie;
