import { ChangeEvent } from "react";
import { GifItem } from "../../elements";

interface ImgData {
    id: string;
    title: string;
    images?: { downsized_medium: { url: string } };
    url?: string;
}
interface Props {
    images: ImgData[];
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
    setNumberImages: (num: number) => void;
    numberImages: number;
}
export const GifGridComponent: React.FC<Props> = (props) => {
    const { images, onSearchChange, setNumberImages, numberImages } = props;

    return (
        <>
            <h1>Gif Searcher</h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    onChange={(event) => onSearchChange(event)}
                />
                <input
                    style={{ width: "3rem" }}
                    type="number"
                    placeholder="numero de gifs"
                    value={numberImages}
                    onChange={(event) => setNumberImages(Number(event.target.value))}
                />
            </div>

            <div className="card-grid" style={{ width: "100%" }}>
                {images.map((img) => {
                    return <GifItem key={img.id} {...img} />;
                })}
            </div>
        </>
    );
};

export default GifGridComponent;
