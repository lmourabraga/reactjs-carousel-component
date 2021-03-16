import { Carousel } from './components/Carousel';
import { ItemCarousel } from './components/Carousel/ItemCarousel';

import './styles/global.scss';

export function App() {
    return (
        <Carousel>
            <ItemCarousel
                type="content"
                title="Hello World 1"
                content="Here we go doing our best to code like a ninja."
                link="https://google.com.br"
            />
            <ItemCarousel
                type="content"
                title="Hello World 2"
                content="Here we go doing our best to code like a ninja."
                link="https://google.com.br"
            />
            <ItemCarousel
                type="content"
                title="Hello World 3"
                content="Here we go doing our best to code like a ninja."
                link="https://google.com.br"
            />
        </Carousel>
    )
}