import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 0 15px;

    background-color: #573BA3;
    
    .logo {
        padding: 40px;
        color: #FFF;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 35px;
        }

        span {
            margin-left: 10px;
            
        }
    }

    @media (max-width: 768px) {
        
        .logo {
            font-size: 20px;
            padding: 25px 0;

            svg {
                font-size: 25px;
            }
        }
    }
 `

export const Cart = styled(Link) `
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: .2s;

    &:hover {
        opacity: 0.7;
    }

    svg {
            font-size: 35px;
    }

    .cart {

        text-align: right;
        margin-right: 10px;


        strong {
            display: block;
            color: #FFF;

        }

        span {
            font-size: 12px;
            color: #CCC;
        }

        
    }

    @media (max-width: 500px) {

        .cart {
            margin: 0;

            strong {
                font-size: 12px;
            }   
            
        }

        svg {
            font-size: 25px;
            margin-left: 10px;
        }
             
    }

  `


export const Promotions = styled.div `
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        transition: all ease .3s;

        cursor: pointer;

        &:hover {
            opacity: .7;
        }

        @media (max-width: 500px) {
            font-size: 14px;
        }
`