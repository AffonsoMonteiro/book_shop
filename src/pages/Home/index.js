import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import { formatPrice } from '../../helpers/format'
import api from '../../helpers/api'

import * as CartActions from '../../store/modules/cart/actions'

import { ListBook } from './styled'

export default function Home() {

    const dispatch = useDispatch()

    const [ products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {

            const response = await api.get('products')

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }))
            setProducts(data)
        }

        loadProducts()
    }, [])

    

   function handleAddProduct(product) {
       dispatch(CartActions.addToCart(product))
    }
        
    return (
        <ListBook>
            {products.map( product => (
                <li key={product.id}> 
                    <img src={product.image} alt={product.title} />

                    <strong>{product.title}</strong>
                    <span> {product.priceFormatted }</span>

                    <button type="button" onClick={() => handleAddProduct(product)}>
                        <div className="CartIcon">
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
            ))}
   
        </ListBook>
        )   
    }