# ReactJS Carousel Component

A ReactJS App configured with Webpack and Babel from scratch.

## Installation

Clone this repository and then run the command below to install the dependencies.

```sh
// with npm
npm install

// with yarn
yarn
```

After all dependencies installed, run then application by running the command:

```sh
// with npm
npm run dev

// with yarn
yarn dev
```

The app will be running at http://localhost:8080/

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import { Carousel } from './components/Carousel';
import { ItemCarousel } from './components/Carousel/ItemCarousel';

export function YourPage() {
  return (
          <>
            <Carousel>
                <ItemCarousel
                    type="content"
                    title="Magento 2 Extensions For ScandiPWA: Quick Guide"
                    content="Get an update on how to implement Magento extensions in a ScandiPWA project. Learn about the difference between using a new vs existing extension."
                    link="https://scandiweb.com/blog/magento-2-extensions-for-scandipwa-quick-guide/"
                />
                <ItemCarousel
                    type="image"
                    caption="Bulbasaur"
                    image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
                />
            </Carousel>
          </>
        )
}
```

## Select props for ItemCarousel

 <table>
    <thead>
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>type</td>
            <td>Defines what kind of item the carousel will render</td>
            <td>content | image</td>
        </tr>
        <tr>
           <td>title</td>
           <td>Used for the context type. It renders a title for the item.</td>
           <td>string</td>
        </tr>
        <tr>
           <td>content</td>
           <td>Used for the context type. It renders a paragraph for the item</td>
           <td>string</td>
        </tr>
        <tr>
           <td>link</td>
           <td>Used for the context type. It renders an HTML anchor tag.</td>
           <td>string</td>
        </tr>
        <tr>
           <td>caption</td>
           <td>Used for the image type. It renders a paragraph at the bottom of the item div.</td>
           <td>string</td>
        </tr>
        <tr>
           <td>image</td>
           <td>Used for the image type. It renders the image URL in an image displayed on the item div.</td>
           <td>string</td>
        </tr>
    </tbody>
  </table>
