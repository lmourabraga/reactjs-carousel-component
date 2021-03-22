import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 500px;
    width: 100%; 
    max-width: 500px;
    margin: 50px 0;
    padding: 0 25px;
`;

export const Gallery = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 500px;

    li{
        display: none;
    
        height: 500px;
        max-width: 500px;
        width: 100%; 
        opacity: 0;

        border-radius: 10px;
        -webkit-box-shadow: 2px 3px 58px -20px rgba(255,255,255, 0.80);
        -moz-box-shadow: 2px 3px 58px -20px rgba(255,255,255, 0.80);
        box-shadow: 2px 3px 58px -20px rgba(255,255,255, 0.80);

        &.activated{
            display: block;
            opacity: 1;
            animation-name: fadeEffect;
            animation-duration: 0.3s;  
        }

        @keyframes fadeEffect {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }

`;

export const Control = styled.div`

    button{
        cursor: pointer;
        display: flex;
        padding: 6px;
        border-radius: 50%;
        border: none;
        background-color: rgba(255, 255, 255, 0.5);
        transition: 0.2s;

        &:hover{
            background-color: rgba(255, 255, 255, 1);
        }

        &:focus{
            outline: unset;
        }
    }

    div.control-dots{
        margin-top: 10px;

        ul > li{
            list-style-type: none;
            margin-right: 6px;
        }

        .control-dot-activated{
            background-color: #fff;
        }

        button{
            border: 1px solid #fff;
            background-color: transparent;
            cursor: pointer;

            &:hover{
                background-color: #fff;
            }
        }
    }

    div.control-dots > ul,
    div.control-arrows{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div.control-arrows{
        margin-top: -65%;
        padding: 0 6px;
        justify-content: space-between;

        @media(max-width: 499px) {
            display: none;
        }
    }
`;