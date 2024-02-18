interface Props {
    id: string;
    title: string;
    images?: { downsized_medium: { url: string } };
    url?: string;
}

export const GifItem: React.FC<Props> = (props) => {
    const { id, title, url } = props;

    return (
        <>
            <div
                style={{
                    margin: "1rem",
                    padding: "1rem",
                    border: "0.1rem solid black",
                    boxShadow: "5px 0.2rem #888888",
                }}
            >
                <img src={url} alt={id}></img>
                <p>{title} </p>
            </div>
        </>
    );
};
