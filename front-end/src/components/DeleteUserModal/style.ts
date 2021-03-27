import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    div{
        text-align: right;
    }

    h2{
        color: var(--text);
    }

    button{
        border: 0;
        padding: 15px;
        color: var(--shape);
        border-radius: 0.25rem;

        & + button{
            margin: 1.5rem 0px 0px 10px;
        }

        &:hover{
            filter: brightness(0.8);
        }

        &.delete{
            background-color: var(--red-dark);
        }

        &.cancel{
            background-color: var(--blue);
        }
    }
`