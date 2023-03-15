import Image from "next/image";

const CustomImage = ({ path }) => {
  const imagePath = require(path).default;

  return <Image src={imagePath} alt="Something would go in here" />;
};

export default CustomImage;
