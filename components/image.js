const CustomImage = ({ path }) => {
  let mediumImagePath;
  const { small, large, medium } = path;
  const largeImagePath = require(large).default;
  const smallImagePath = require(small).default;

  mediumImagePath = medium ? require(medium).default : null;

  return (
    <img
      src={smallImagePath}
      srcSet={`${smallImagePath}365w, ${mediumImagePath}760w, ${largeImagePath} 1440w`}
    />
  );
};

export default CustomImage;
