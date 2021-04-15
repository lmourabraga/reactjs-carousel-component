import { Carousel } from './components/Carousel';
import { ItemCarousel } from './components/Carousel/ItemCarousel';

import space1 from '../src/assets/images/space-1.jpeg';
import space2 from '../src/assets/images/space-2.jpeg';
import space3 from '../src/assets/images/space-3.jpeg';
import space4 from '../src/assets/images/space-4.jpeg';
import space5 from '../src/assets/images/space-5.jpeg';
import space6 from '../src/assets/images/space-6.jpeg';

import './styles/global.scss';

export function App() {
    return (
        <>
            <div className="row">
                <h1>
                    React Carousel Component
                </h1>
            </div>

            <div className="row">
                <Carousel>
                    <ItemCarousel
                        backgroundImage={space1}
                    >
                        <h1>Slide Title 1</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet felis arcu, sed egestas lacus convallis quis. Etiam vel facilisis justo.</p>
                        <a href="#">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space2}
                    >
                        <h1>Slide Title 2</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet felis arcu, sed egestas lacus convallis quis. Etiam vel facilisis justo.</p>
                        <a href="#">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space3}
                    >
                        <h1>Slide Title 3</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet felis arcu, sed egestas lacus convallis quis. Etiam vel facilisis justo.</p>
                        <a href="#">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space4}
                    >
                        <h1>Slide Title 4</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet felis arcu, sed egestas lacus convallis quis. Etiam vel facilisis justo.</p>
                        <a href="#">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space6}
                    >
                        <h1>Slide Title 6</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet felis arcu, sed egestas lacus convallis quis. Etiam vel facilisis justo.</p>
                        <a href="#">
                            Read more
                            </a>
                    </ItemCarousel>
                </Carousel>

                <Carousel>
                    <ItemCarousel
                        backgroundImage={space1}
                    >
                        <h1>Slide Title 1</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet felis arcu, sed egestas lacus convallis quis. Etiam vel facilisis justo.</p>
                        <a href="#">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space2}
                    >
                        <h1>Slide Title 2</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet felis arcu, sed egestas lacus convallis quis. Etiam vel facilisis justo.</p>
                        <a href="#">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space3}
                    >
                        <h1>Slide Title 3</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet felis arcu, sed egestas lacus convallis quis. Etiam vel facilisis justo.</p>
                        <a href="#">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space4}
                    >
                        <h1>Slide Title 4</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet felis arcu, sed egestas lacus convallis quis. Etiam vel facilisis justo.</p>
                        <a href="#">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space6}
                    >
                        <h1>Slide Title 6</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet felis arcu, sed egestas lacus convallis quis. Etiam vel facilisis justo.</p>
                        <a href="#">
                            Read more
                            </a>
                    </ItemCarousel>
                </Carousel>
            </div>
        </>
    )
}