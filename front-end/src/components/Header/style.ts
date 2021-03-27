import styled, {} from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1.2rem;

    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;

        img{
            margin-right: 1rem;
            width: 1.5rem;
        }

        h1{
            color: var(--shape);
            font-size: 1.2rem;
        }
    }

    button{
        color: var(--shape);
        background-color: var(--blue-light);
        border: 0;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        outline-color: var(--blue);

        &:hover{
            filter: brightness(0.9);
        }
    }
`