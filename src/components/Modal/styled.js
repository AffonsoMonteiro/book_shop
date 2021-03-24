import styled from 'styled-components'

export const Container = styled.div `
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.7);
    display: ${props => props.status ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    
` 

export const ModalBody = styled.div `
    width: 300px;
    height: 300px;

    background-color: #fff;
    padding: 10px;
    border-radius: 5px;

        p {
            font-size: 18px;
            font-weight: 600;
        }

    .listDiscount {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 40px auto;

        .discount {
            padding: 3px;
            margin-bottom: 5px;
            font-style: italic;
        }

    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        background: #573BA3;
        color: #FFF;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        padding: 10px 50px;
        text-transform: uppercase;
        transition: all ease .3s;

        &:hover {
            opacity: 0.9;
        }
    }
`