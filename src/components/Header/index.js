import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { GiWhiteBook } from "react-icons/gi"
import { MdShoppingCart } from 'react-icons/md'


import { Container, Cart, Promotions } from './styled'
import Modal from '../Modal'
 

 export default function Header() {

    const [ modalStatus, setModalStatus ] = useState(false)
    
    const cartSize = useSelector(state => state.cart.length)

    
    function hamdleModal() {
        setModalStatus(!modalStatus)
    }

    return (
        <Container>
            <Link to='/' >
                <div className="logo">
                    <GiWhiteBook size={35} color="#FFF"  />
                    <span>BookShop</span> 
                </div>
            </Link>

            <Promotions onClick={hamdleModal}>
                 Promoção
            </Promotions>

            <Cart to="/cart">
                <div className="cart">
                    <strong>Meu carrinho</strong>
                    <span> {cartSize} itens </span>
                </div>
                <MdShoppingCart size={35} color="#FFF" />
            </Cart>
            <Modal status={modalStatus} setStatus={setModalStatus} />
        </Container>
    )
}

