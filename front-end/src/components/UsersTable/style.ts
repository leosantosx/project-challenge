import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1120px;
    margin: 4rem auto; 

    table{

        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            font-weight: 400;
            color: var(--text-title);
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background-color: var(--shape);
            color: var(--text);
            border-radius: 0.25rem;

            button{
                border: 0;
                display: inline-block;
                margin: 0;
                background-color: inherit;
                outline-color: var(--text);
                border-radius: 0.25rem;
                
                img{
                    width: 2rem;
                    height: 2rem;
                    padding: 0.2rem;
                    border-radius: 0.25rem;
                    transition: background-color 200ms;
                    margin-bottom: -5px;
                   
                    &.delete:hover{
                        background-color: var(--red);
                    }

                    &.edit:hover{
                        background-color: var(--blue-light);
                    }
                }

            }
        }
    }

`