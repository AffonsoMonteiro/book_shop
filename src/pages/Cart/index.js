import React, {useState, useEffect} from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'
import ReactTooltip from 'react-tooltip';

import { useSelector, useDispatch } from 'react-redux'

import { Container, CardProduct } from './styled'
import { formatPrice } from '../../helpers/format'

import * as CartActions from '../../store/modules/cart/actions'

 export default function Cart( ) {

    const dispatch = useDispatch()

    const total = useSelector(state => formatPrice( state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount
        },  0)
    ))

    const cart = useSelector(state => state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount)
    })))


    function increment(product) {
        dispatch(CartActions.upadateAmount(product.id, product.amount + 1))
    }

    function decrement(product) {
        dispatch(CartActions.upadateAmount(product.id, product.amount - 1))
    }
    
    return (
        <Container>
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
                                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product.id))} className="btnRemove" data-tip="Remover"  > 
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
                    <span>Total</span>
                    <strong> {total} </strong>
                </div>
            </footer>
      <ReactTooltip place="top" effect="solid" />

        </Container>
    )
}

