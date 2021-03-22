import { Item } from './styled';

export const ItemCarousel = (props) => {

    return (
        <>
            {props.type === "content" && (
                <Item type={props.type}>
                    <h1>
                        {props.title}
                    </h1>
                    <p>
                        {props.content}
                    </p>
                    {props.link && (
                        <p>
                            <a href={props.link} target="_blank">
                                Read more
                            </a>
                        </p>
                    )}
                </Item>
            )}

            {props.type === "image" && (
                <Item type={props.type} style={{ backgroundImage: `url(${props.image})` }}>
                    {props.caption && (
                        <p>
                            {props.caption}
                        </p>
                    )}
                </Item>
            )}
        </>
    );
}