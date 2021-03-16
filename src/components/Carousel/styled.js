import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 500px;
    width: 500px;
    margin: 0 auto;
`;

export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 500px;
    width: 500px;

    .activated{
        display: flex;
    }

    div{
        display: none;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    
        height: 500px;
        width: 500px;
        border: 1px solid #fff;
        transition: 5s;


        & + :nth-child(1){
            display: flex;
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