const CustomImage = ({ path, type }) => {
  let mediumImagePath;
  const { small, large, medium } = path;
  const largeImagePath = require(large).default;
  const smallImagePath = require(small).default;

  mediumImagePath = medium ? require(medium).default : null;

  return type == "trending" ? (
    <img
      src={smallImagePath}
      srcSet={`${largeImagePath} 760w,${largeImagePath} 1440w`}
      alt="Something would go in here"
    />
  ) : (
    <img
      src={smallImagePath}
      srcSet={`${smallImagePath}365w, ${mediumImagePath}760w, ${largeImagePath} 1440w`}
    />
  );
};

export default CustomImage;
