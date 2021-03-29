import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    h2{
        color: var(--text);
        margin-bottom: 1rem;
    }

    input{
        width: 100%;
        padding: 1.2rem 0.8rem;
        background-color: var(--background);
        border-radius: 0.25rem;
        border: 1px solid var(--border);
        font-size: 0.9rem;
        color: var(--text);
        margin: 0.4rem 0;
        outline-color: var(--text-title)

    }

    p{
        color: var(--red-dark);
    }

    button{
        border: 0;
        background-color: var(--blue);
        color: var(--shape);
        padding: 1rem;
        border-radius: 0.25rem;
        margin-top: 1rem;
        font-size: 1rem;
    }
`