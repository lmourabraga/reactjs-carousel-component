import { useState, useEffect, Children } from 'react';
import { Wrapper, Gallery, Control } from './styled';

import {
    FaChevronLeft,
    FaChevronRight,
} from 'react-icons/fa';

export const Carousel = (props) => {
    const [current, setCurrent] = useState(1);

    const [initialPosition, setInitialPosition] = useState(null);
    const [endingPosition, setEndingPosition] = useState(null);
    const [resultPosition, setResultPosition] = useState(null);

    const items = props.children;

    const totalItems = items.length;

    const dots = [];

    for (let i = 0; i < totalItems; i++) {
        dots.push(
            <li key={i + 1}>
                <button
                    id={i + 1}
                    className={current === i + 1 ? "control-dot-activated" : undefined}
                    onClick={() => handleDotNavigation(i + 1)} />
            </li>
        )
    }

    const getCurrentItem = document.getElementById(current);

    const handleDotNavigation = (item) => {
        const classNameValue = getCurrentItem.classList.value;

        if (classNameValue === "activated" && current !== item) {
            getCurrentItem.classList.toggle("activated");

            setCurrent(item);
        }
    }

    const handleClick = (action) => {
        switch (action) {
            case "next":
                current >= totalItems ? setCurrent(1) : setCurrent(current + 1);
                break;
            case "back":
                current <= 1 ? setCurrent(totalItems) : setCurrent(current - 1);
        }

        getCurrentItem.classList.toggle("activated");
    }

    useEffect(() => {
        const getSwipedElement = document.getElementById("swipe");

        getSwipedElement.addEventListener('touchstart', function (e) {
            setInitialPosition(e.touches[0].clientX);
        }, false);

        getSwipedElement.addEventListener('touchend', function (e) {
            setEndingPosition(e.changedTouches[0].clientX);
        }, false);
    }, []);

    useEffect(() => {
        setResultPosition(initialPosition - endingPosition);
        setEndingPosition(null);
        setInitialPosition(null);

        if (resultPosition > 0) {
            handleClick('next');
        } else if (resultPosition < 0) {
            handleClick('back');
        }
    }, [endingPosition]);

    useEffect(() => {
        document.getElementById(current).classList.add("activated");
    }, [current]);

    return (
        <Wrapper>
            <Gallery id="swipe">
                {Children.map(items, (item, i) => {
                    return (
                        <li id={i + 1}>
                            {item}
                        </li>
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