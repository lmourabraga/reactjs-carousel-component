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
                        <h1>Slide 1: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space2}
                    >
                        <h1>Slide 2: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space3}
                    >
                        <h1>Slide 3: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage={space4}
                    >
                        <h1>Slide 4: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>
                    <ItemCarousel
                        backgroundImage={space5}
                    >
                        <h1>Slide 5: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>
                    <ItemCarousel
                        backgroundImage={space6}
                    >
                        <h1>Slide 6: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>
                </Carousel>
            </div>
        </>
    )
}