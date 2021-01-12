import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Container = styled.div `

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

        span {
            margin-left: 10px;
            
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

  `