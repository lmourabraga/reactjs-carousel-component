import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 500px;
    width: 500px;
    margin: 0 auto;
`;

export const Gallery = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 500px;
    width: 500px;

    li{
        display: none;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    
        height: 500px;
        width: 500px; 
        border: 1px solid #fff;
        opacity: 0;

        &.activated{
            display: flex;
            opacity: 1;
            animation-name: example;
            animation-duration: 1s;  
        }

        @keyframes example {
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
        }
    }

    div.control-dots > ul,
    div.control-arrows{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div.control-arrows{
        margin-top: -60%;
        padding: 0 6px;
        justify-content: space-between;
    }

    button{
        cursor: pointer;
        display: flex;
        padding: 6px;
        border-radius: 50%;
        border: none;
        background-color: rgba(255, 255, 255, 0.5);
    }
`;