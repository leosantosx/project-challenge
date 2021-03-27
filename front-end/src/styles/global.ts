import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F0F2F5;
        --blue: #385E72;
        --blue-light: #6AABD2;
        --text-title: #969CB2;
        --text: #363F5F;
        --shape: #ffffff;
        --red: #ff9a8c;
        --red-dark: #ff2929;
        --border: #E7E9EE;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased; 
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h1, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer
    }
    
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        background-color: var(--shape);
        position: relative;
        padding: 3rem;
        width: 100%;
        max-width: 600px;
        border-radius: 0.25rem;
        outline: 0;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    }

    .react-modal-close{
        border: 0;
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        background-color: inherit;
        transition: filter 200ms;

        img{
            width: 1.2rem;
            height: 1.2rem;

            &:hover{
                filter: brightness(0.9);
            }

        }

    }
`