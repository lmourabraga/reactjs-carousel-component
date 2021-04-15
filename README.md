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
                        backgroundImage="IMAGE_URL_HERE"
                    >
                        HTML CONTENT GOES HERE...
                    </ItemCarousel>

                    <ItemCarousel
                        backgroundImage="IMAGE_URL_HERE"
                    >
                        HTML CONTENT GOES HERE...
                    </ItemCarousel>
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
            <td>backgroundImage</td>
            <td>Path or URL of the image to be placed as background</td>
            <td>string</td>
        </tr>
    </tbody>
  </table>
