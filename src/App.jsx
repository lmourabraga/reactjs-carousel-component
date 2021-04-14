import { Carousel } from './components/Carousel';
import { ItemCarousel } from './components/Carousel/ItemCarousel';

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
                        backgroundImage="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2623&q=80"
                    >
                        <h1>Case study 0: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2623&q=80"
                    >
                        <h1>Case study 1: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2623&q=80"
                    >
                        <h1>Case study 2: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2623&q=80"
                    >
                        <h1>Case study 3: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>
                    <ItemCarousel
                        backgroundImage="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2623&q=80"
                    >
                        <h1>Case study 4: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
                        <p>Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites.</p>
                        <a href="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/">
                            Read more
                            </a>
                    </ItemCarousel>
                    <ItemCarousel
                        backgroundImage="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2623&q=80"
                    >
                        <h1>Case study 5: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA</h1>
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