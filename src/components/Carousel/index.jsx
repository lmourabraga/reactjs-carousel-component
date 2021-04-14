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

    useEffect(() => {
        getItem[currentSlide].className = "carousel__item";
        getItem[currentPreviousSlide].className = "carousel__item";
        getItem[currentNextSlide].className = "carousel__item";

        getItem[currentSlide].classList.add("active");
        getItem[currentPreviousSlide].classList.add("prev");
        getItem[currentNextSlide].classList.add("next");
    }, [currentSlide, currentPreviousSlide, currentNextSlide]);

    const handleNextSlide = (value) => {

        disableNavigation();

        if (!isMoving) {
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

        disableNavigation();

        if (!isMoving) {
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

    const disableNavigation = () => {
        // Set 'moving' to true for the same duration as our transition.
        // (0.5s = 500ms)

        setIsMoving(true);
        // setTimeout runs its function once after the given time
        setTimeout(function () {
            setIsMoving(false);
        }, 500);
    }

    return (
        <Wrapper>
            <ul className="carousel">
                {Children.map(items, (item) => {
                    return (
                        <li className="carousel__item">
                            {item}
                        </li>
                    )
                })}


            </ul>

            <Controls>
                <div className="carousel__button--next" onClick={() => handleNextSlide(currentSlide)}></div>
                <div className="carousel__button--prev" onClick={() => handlePreviousSlide(currentSlide)}></div>
            </Controls>
        </Wrapper>
    )
};