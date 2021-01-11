import React from 'react';
import { Link } from 'react-router-dom'
import { GiWhiteBook } from "react-icons/gi"
import { MdShoppingCart } from 'react-icons/md'


import { Container, Cart } from './styled'



export default function Header() {
    return (
        <Container>
            <Link to='/' >
                <div className="logo">
                    <GiWhiteBook size={35} color="#FFF"  />
                    <span>BookShop</span> 
                </div>
            </Link>

            <Cart to='/cart'>
                <div className="cart">
                    <strong>Meu carrinho</strong>
                    <span> 3 itens </span>
                </div>
                <MdShoppingCart size={35} color="#FFF" />
            </Cart>
        </Container>
    )
}