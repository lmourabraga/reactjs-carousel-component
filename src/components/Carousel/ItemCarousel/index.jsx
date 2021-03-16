export const ItemCarousel = (props) => {

    return (
        <>
            {props.type === "content" && (
                <>
                    <h1>
                        {props.title}
                    </h1>
                    <p>
                        {props.content}
                    </p>
                    {props.link && (
                        <p>
                            <a href={props.link}>
                                Read more
                        </a>
                        </p>
                    )}
                </>
            )}
        </>
    );
}