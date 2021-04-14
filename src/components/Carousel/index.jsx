import {
    Children,
    useEffect,
    useState,
} from 'react';
import {
    Wrapper,
    Controls
} from './styled';

export const Carousel = (props) => {
    const items = props.children;
    const totalItems = items.length;

    const [isMoving, setIsMoving] = useState(false);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentNextSlide, setCurrentNextSlide] = useState(currentSlide + 1);
    const [currentPreviousSlide, setCurrentPreviousSlide] = useState(totalItems - 1);

    const getItem = document.getElementsByClassName("carousel__item");
    const getDot = document.getElementsByClassName("carousel__dot");

    useEffect(() => {
        getItem[currentSlide].classList.add("active");
        getItem[currentPreviousSlide].classList.add("prev");
        getItem[currentNextSlide].classList.add("next");

        getDot[currentSlide].classList.add("active");
    }, [currentSlide, currentPreviousSlide, currentNextSlide]);

    const disableNavigation = () => {
        getItem[currentSlide].className = "carousel__item";
        getItem[currentPreviousSlide].className = "carousel__item";
        getItem[currentNextSlide].className = "carousel__item";

        getDot[currentSlide].className = "carousel__dot";
        
        setIsMoving(true);
        setTimeout(function () {
            setIsMoving(false);
        }, 500);
    }

    const handleNextSlide = (value) => {
        if (!isMoving) {
            disableNavigation();

            if (value === (totalItems - 1)) {
                setCurrentSlide(0);
                setCurrentNextSlide(1);
                setCurrentPreviousSlide(totalItems - 1);
            } else if (value === (totalItems - 2)) {
                setCurrentSlide(value + 1);
                setCurrentNextSlide(0);
                setCurrentPreviousSlide(value);
            } else {
                setCurrentSlide(value + 1);
                setCurrentNextSlide(value + 2);
                setCurrentPreviousSlide(value);
            }
        }
    }

    const handlePreviousSlide = (value) => {
        if (!isMoving) {
            disableNavigation();

            if (value === 0) {
                setCurrentSlide(totalItems - 1);
                setCurrentNextSlide(0);
                setCurrentPreviousSlide(totalItems - 2);

            } else if (value === 1) {
                setCurrentSlide(value - 1);
                setCurrentPreviousSlide(totalItems - 1);
                setCurrentNextSlide(value);
            } else {
                setCurrentSlide(value - 1);
                setCurrentPreviousSlide(currentPreviousSlide - 1);
                setCurrentNextSlide(value);
            }
        }
    }

    const handleDotNavigation = (value) => {
        if (!isMoving && value !== currentSlide) {
            disableNavigation();

            if (value === totalItems - 1) {
                setCurrentSlide(value);
                setCurrentNextSlide(0);
                setCurrentPreviousSlide(value - 1);

            } else if (value === 0) {
                setCurrentSlide(value);
                setCurrentNextSlide(1);
                setCurrentPreviousSlide(totalItems - 1);
            } else {
                setCurrentSlide(value);
                setCurrentNextSlide(value + 1);
                setCurrentPreviousSlide(value - 1);
            }
        }
    }

    return (
        <Wrapper>
            <ul className="carousel">
                {Children.map(items, (item, i) => {
                    return (
                        <li key={i + 1} className="carousel__item">
                            {item}
                        </li>
                    )
                })}
            </ul>

            <Controls>
                <div className="carousel__button--next" onClick={() => handleNextSlide(currentSlide)}></div>
                <div className="carousel__button--prev" onClick={() => handlePreviousSlide(currentSlide)}></div>

                <div id="dots">
                    <ul>
                        {
                            [...Array(totalItems)].map((item, i) => (
                                <li key={i + 1} className="carousel__dot" onClick={() => handleDotNavigation(i)}></li>
                            )
                            )
                        }
                    </ul>
                </div>

            </Controls>
        </Wrapper>
    )
};