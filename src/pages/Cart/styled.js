import styled from 'styled-components'


export const Container = styled.div `
    padding: 30px;
    background: #FFF;
    margin: 20px 100px;
    border-radius: 5px;


    footer {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            background: #573BA3;
            color: #FFF;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            padding: 15px 50px;
            text-transform: uppercase;
            transition: all ease .3s;

            &:hover {
                opacity: 0.9;
            }
        }

        .total {
            display: flex;
            align-items: baseline;

            span{
                color: #888;
                font-weight: bold;
            }

            strong {
                font-size: 26px;
                margin-left: 5px;
            }
        }
    }
`


export const CardProduct = styled.table `
    width: 100%;

    thead th {
        color: #888;
        text-align: left;

        padding: 15px;
    }

    tbody td {
        padding: 15px;
        border-bottom: 1px solid #ccc;
    }

    img {
        height:150px;
        
    }

    .nameProduct {
        color: #333;
        display: block
    }

    .priceProduct {
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
        display: block
    }

    .qtdButton {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #CCC;
            border-radius: 4px;
            color: #677;
            width: 50px;
            padding: 6px;
            text-align: center;
        }

        button {
            background: none;
            border: none;
            padding: 5px;
        }
    }

    .btnRemove {
        border: none;
        background: none;

       
    }
` 