import { useState, useEffect, Children } from 'react';
import { Wrapper, Gallery, Control } from './styled';

import {
    FaChevronLeft,
    FaChevronRight,
} from 'react-icons/fa';

export const Carousel = (props) => {
    /** A state to get the active carousel item */
    const [current, setCurrent] = useState(1);

    /** Declaring states for clientX property which returns the horizontal coordinate
     * when user swipe a carousel item */
    const [initialPosition, setInitialPosition] = useState(null);
    const [endingPosition, setEndingPosition] = useState(null);
    const [resultPosition, setResultPosition] = useState(null);

    /** Declaring props as items to loop through them in order to 
     * create the carousel items */
    const items = props.children;

    /** Declaring the number of items as totalItems to create the dot navigation */
    const totalItems = items.length;

    /** Initializing the dot navigation as an empty array */
    const dots = [];

    /** Loops through the totalItems and push into dots array to create de dot navigation */
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

    /** Getting the current element */
    const getCurrentItem = document.getElementById(current);

    /** A function to handle onClick action on the dot navigation */
    const handleDotNavigation = (item) => {
        const classNameValue = getCurrentItem.classList.value;

        if (classNameValue === "activated" && current !== item) {
            getCurrentItem.classList.toggle("activated");

            setCurrent(item);
        }
    }

    /** A function to handle onClick action on the arrow and swipe navigation */
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

    /** Handles the swipe action on mobile devices */
    useEffect(() => {
        const getSwipedElement = document.getElementById("swipe");

        getSwipedElement.addEventListener('touchstart', function (e) {
            setInitialPosition(e.touches[0].clientX);
        }, false);

        getSwipedElement.addEventListener('touchend', function (e) {
            setEndingPosition(e.changedTouches[0].clientX);
        }, false);
    }, []);

    /** Calculates the swipes action based on the clientX property to identify the swipe's side
     * and handle which item to display */
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

    /** Actives the carousel item based on current state */
    useEffect(() => {
        document.getElementById(current).classList.add("activated");
    }, [current]);

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