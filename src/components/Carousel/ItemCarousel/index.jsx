import { Item } from './styled';

export const ItemCarousel = (props) => {

    return (
        <Item
            backgroundImage={props.backgroundImage}
        >
            { props.children}
        </Item >
    );
}