import styled, { css } from 'styled-components';

export const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    height: 100%;
    width: 100%; 
    padding: 32px;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 8px;

    ${props => props.backgroundImage && css`
        background: url(${props => props.backgroundImage}) rgba(0, 0, 0, 0.5);
        background-blend-mode: multiply;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    `}

    h1, p, a{
        margin-bottom: 20px;
    }

    p{
        line-height: 22px;
    }

    a{
        color: #fff;
        text-decoration: none;
        transition: 0.2s;

        &:hover{
            color: #c3c3c3;
        }
    }
`;