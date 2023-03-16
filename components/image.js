import Image from "next/image";

const CustomImage = ({ path }) => {
  const { large } = path;
  const largeImagePath = large.substring(1);

  return <Image src={largeImagePath} width={250} height={250} />;
};

export default CustomImage;
