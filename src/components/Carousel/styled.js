import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    
    overflow: hidden;
    width: 100%;
    max-width: 600px;

    .carousel-wrapper * {
        box-sizing: border-box;
    }

    .carousel {
        height: 500px;

       transform-style: preserve-3d;
    }

    .carousel__item {
        height: 500px;

        list-style-type: none;
        opacity: 0;
        position: absolute;
        top:0;
        width: 100%;
        margin: auto;
        padding: 1rem 4rem;
        z-index: 100;
        transition: transform .5s, opacity .5s, z-index .5s;
    }

    .carousel__item.active {
        opacity: 1;
        position: relative;
        z-index: 900;
    }

    .carousel__item.prev,
    .carousel__item.next {
        z-index: 800;
    }
    .carousel__item.prev {
        transform: translateX(-100%); /* Move 'prev' item to the left */
    }
    .carousel__item.next {
        transform: translateX(100%); /* Move 'next' item to the right */
    }
`;

export const Controls = styled.div`
    .carousel__button--prev,
    .carousel__button--next {
        position: absolute;
        top:50%;
        width: 3rem;
        height: 3rem;
        background-color: #FFF;
        transform: translateY(-50%);
        border-radius: 50%;
        cursor: pointer; 
        z-index: 1001; /* Sit on top of everything */
        border: 1px solid black;
    }
    .carousel__button--prev {
        left:0;
    }
    .carousel__button--next {
        right:0;
    }
    .carousel__button--prev::after,
    .carousel__button--next::after {
    content: " ";
        position: absolute;
        width: 10px;
        height: 10px;
        top: 50%;
        left: 54%;
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        transform: translate(-50%, -50%) rotate(135deg);
    }
    .carousel__button--next::after {
        left: 47%;
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    div#dots ul{
        display: flex;
        justify-content: center;
    }

    .carousel__dot{
        cursor: pointer;
        width: 10px;
        height: 10px;
        border: 1px solid #FFF;
        border-radius: 10px;
        list-style-type: none;

        & + li{
            margin-left: 10px;
        }
    }

    .carousel__dot.active{
        background-color: #FFF;
    }
`;

