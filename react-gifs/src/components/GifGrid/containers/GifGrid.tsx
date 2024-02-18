import React, { ChangeEvent, useState } from "react";
import GifGridComponent from "../components/GifGridComponent";
import getGifs from "../../../helpers/getGifs";

interface ImgData {
  id: string;
  title: string;
  images?: { downsized_medium: { url: string } };
  url?: string;
}

export const GifGrid = () => {
  const [images, setImages] = useState<ImgData[]>([]);

  const [numberImages, setNumberImages] = useState<number>(10);

  const [search, setSearch] = useState<string>("");

  const onSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  React.useEffect(() => {
    const getImages = async () => {
      const gifs = await getGifs(search, numberImages);
      setImages(gifs);
    };
    getImages();
  }, [search, numberImages]);

  return (
    <GifGridComponent
      images={images}
      onSearchChange={onSearchChange}
      numberImages={numberImages}
      setNumberImages={setNumberImages}
    />
  );
};

export default GifGrid;
