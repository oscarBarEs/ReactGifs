export interface ImgData {
    id: string;
    title: string;
    images?: { downsized_medium: { url: string } };
    url?: string;
}

export const getGifs = async (
    category: string,
    num: number
): Promise<ImgData[]> => {
    //CHANGE API KEY TO YOUR OWN
    const YOUR_API_KEY = "";
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${num}&api_key=${YOUR_API_KEY}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs: ImgData[] = data.map((img: ImgData) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });
    console.log(gifs);
    return gifs;
};

export default getGifs;
