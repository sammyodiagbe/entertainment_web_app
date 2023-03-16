import Image from "next/image";

const CustomImage = ({ path }) => {
  let mediumImagePath;
  const { small, large, medium } = path;
  console.log(`${small}`);
  const largeImagePath = large.substring(1);
  const smallImagePath = small.substring(1);

  mediumImagePath = medium ? medium.substring(1) : null;

  return (
    <Image
      src={smallImagePath}
      width={150}
      height={150}
      srcSet={`${smallImagePath}365w, ${mediumImagePath}760w, ${largeImagePath} 1440w`}
    />
  );
};

export default CustomImage;
