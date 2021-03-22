import { Carousel } from './components/Carousel';
import { ItemCarousel } from './components/Carousel/ItemCarousel';

import './styles/global.scss';

export function App() {
    return (
        <>
            <div className="row">
                <div className="col-1">
                    <h1>
                        React Carousel Component
                    </h1>
                </div>
            </div>

            <div className="row">
                <div className="col-2">
                    <div>
                        <h2>Type: context</h2>
                    </div>
                    <Carousel>
                        <ItemCarousel
                            type="content"
                            title="Magento 2 Extensions For ScandiPWA: Quick Guide"
                            content="Get an update on how to implement Magento extensions in a ScandiPWA project. Learn about the difference between using a new vs existing extension."
                            link="https://scandiweb.com/blog/magento-2-extensions-for-scandipwa-quick-guide/"
                        />
                        <ItemCarousel
                            type="content"
                            title="Case study: Puma Mexico Becomes the Fastest Puma Store After Adopting ScandiPWA"
                            content="Read how Puma Mexico became the first among Puma international eCom stores to adopt ScandiPWA, becoming the fastest among the company’s websites."
                            link="https://scandiweb.com/blog/case-study-puma-mexico-becomes-the-fastest-puma-store-after-adopting-scandipwa/"
                        />
                        <ItemCarousel
                            type="content"
                            title="GraphQL Query Optimization in PWA Projects"
                            content="Gain a concrete understanding of GraphQL role in PWA projects. Learn how to identify elements that kill performance and see how to fix them."
                            link="https://scandiweb.com/blog/graphql-query-optimization-in-pwa-projects/"
                        />
                    </Carousel>
                </div>

                <div className="col-2">
                    <div>
                        <h2>Type: image</h2>
                    </div>
                    <Carousel>
                        <ItemCarousel
                            type="image"
                            caption="Bulbasaur"
                            image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
                        />
                        <ItemCarousel
                            type="image"
                            caption="Ivysaur"
                            image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"
                        />
                        <ItemCarousel
                            type="image"
                            caption="Venusaur"
                            image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"
                        />
                    </Carousel>
                </div>
            </div>
        </>
    )
}