import styled, { css } from 'styled-components';

export const Item = styled.div`
    height: 100%;
    width: 100%; 
    padding: 32px;

    display: flex;
    align-items: center;
    flex-direction: column;

    ${props => props.type === "content" && css`
        justify-content: center;
        text-align: center;

        p{
            padding: 10px 0;
            line-height: 22px;
            
            a{
            color: #fff;
            text-decoration: none;
            transition: 0.2s;

                &:hover{
                    color: #c3c3c3;
                }
            }
        }
    `}

    ${props => props.type === "image" && css`
        justify-content: flex-end;

        background-repeat: no-repeat;
        background-position: center;
    `}
`;