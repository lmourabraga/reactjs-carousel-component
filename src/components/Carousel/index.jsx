import { useState, useEffect, Children } from 'react';
import { Wrapper, Gallery, Control } from './styled';

import {
    FaChevronLeft,
    FaChevronRight,
} from 'react-icons/fa';

export const Carousel = (props) => {

    const items = props.children;

    const totalItems = items.length;

    console.log(totalItems);

    const [current, setCurrent] = useState(1);

    const handleClick = (action) => {
        if (action === 'next') {
            current >= totalItems ? setCurrent(1) : setCurrent(current + 1);
        } else {
            current <= 1 ? setCurrent(totalItems) : setCurrent(current - 1);
        }

        const getElement = document.getElementById(current);
        const classNameValue = getElement.classList.value;

        if (classNameValue === "activated") {
            getElement.classList.toggle("activated");
        }
    }

    const handleSelectedItem = (item) => {
        const getElement = document.getElementById(current);
        const classNameValue = getElement.classList.value;

        if (classNameValue === "activated" && current !== item) {
            getElement.classList.toggle("activated");

            setCurrent(item);
        }
    }

    useEffect(() => {
        document.getElementById(current).classList.add("activated");
    }, [current]);

    const dots = [];

    for (let i = 0; i < totalItems; i++) {
        dots.push(
            <li>
                <button
                    id={i + 1}
                    className={current === i + 1 && "control-dot-activated"}
                    onClick={() => handleSelectedItem(i + 1)} />
            </li>
        )
    }

    return (
        <Wrapper>
            <Gallery>
                {Children.map(items, (item, i) => {
                    return (
                        <div id={i + 1} key={i + 1}>
                            {item}
                        </div>
                    )
                })}
            </Gallery>

            <Control>
                <div className="control-dots">
                    <ul>
                        {dots}
                    </ul>
                </div>

                <div className="control-arrows">
                    <button onClick={() => handleClick('back')}>
                        <FaChevronLeft />
                    </button>
                    <button onClick={() => handleClick('next')}>
                        <FaChevronRight />
                    </button>
                </div>
            </Control>
        </Wrapper>
    )
};