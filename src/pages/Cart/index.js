import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete, MdRemoveShoppingCart} from 'react-icons/md'


import { useSelector, useDispatch } from 'react-redux'

import { Container, CardProduct, EmptyCart, StartShopping } from './styled'
import { formatPrice } from '../../helpers/format'

import * as CartActions from '../../store/modules/cart/actions'

 export default function Cart( ) {

    const dispatch = useDispatch()

    const { cart } = useSelector((state => state))

    
    const subtotal = cart.reduce( ( totalSum, product ) => totalSum + (product.price * product.amount ), 0)
   
    const cartItemsQuantity = cart.length
    
    function getDiscount (itemsQuantity, subtotal) {
        if (itemsQuantity >= 5) {
            return subtotal * 25 / 100
        }
        
        const otherDiscounts = {
            1: 0,
            2: subtotal * 5 / 100,
            3: subtotal * 10 / 100,
            4: subtotal * 20 / 100,
        }

        return otherDiscounts[itemsQuantity]
    }

    const discount = getDiscount(cartItemsQuantity, subtotal) || 0

    const total = ( subtotal - discount) || 0

    function increment(product) {
        dispatch(CartActions.updateAmount(product.id, product.amount + 1))
    }

    function decrement(product) {
        dispatch(CartActions.updateAmount(product.id, product.amount - 1))
    }
    
    return (
        <Container>
            {cart.length === 0 ? (
                <EmptyCart>
                    <MdRemoveShoppingCart />
        
                    <div>
                    <h2>Oops...</h2>
                    <p>Parece que seu carrinho de compras está vazio!</p>
                    <StartShopping to="/">Start Shopping</StartShopping>
                    </div>
                </EmptyCart>
            ) : (
                <>
                    <CardProduct >
                <thead>
                    <tr>
                        < th />
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>SubTotal</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                   { cart.map(product => (
                        <tr key={product.id} >
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <div className="nameProduct">{product.title}</div>
                                <div className="priceProduct">{product.priceFormatted} </div>
                            </td>
                            <td >
                                <div className="qtdButton">
                                    <button type="button" onClick={() => decrement(product)}  >
                                        <MdRemoveCircleOutline size={20} />
                                    </button>
                                    <input type="number" readOnly value={product.amount} />
                                    <button type="button" onClick={() => increment(product)} >
                                        <MdAddCircleOutline size={20} />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong> {product.subtotal} </strong>
                            </td>
                             <td  >
                                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product.id))} className="btnRemove"   > 
                                    <MdDelete size={20}  />
                                </button>
                            </td>
                        </tr>
                   ))}
                </tbody>
            </CardProduct>

            <footer>
                <button type="button" >Finalizar pedido</button>

                <div className="total">
                    <div>
                        <span>Subtotal</span>
                        <strong> {formatPrice(subtotal) } </strong>
                    </div> 
                   
                    <div >
                        <span>Disconto</span>
                        <strong> {formatPrice(discount)} </strong>
                    </div>
                    
                    <div>
                        <span>Total</span>
                        <strong> { formatPrice(total)} </strong>
                    </div> 
                </div>
            </footer>
                </>
            )}
            
      

        </Container>
    )
}

