import Image from "next/image";

const CustomImage = ({ path }) => {
  const largeImagePath = path.substring(1);

  return (
    <Image
      src={largeImagePath}
      width={250}
      height={250}
      alt={"Awesome movie"}
    />
  );
};

export default CustomImage;
