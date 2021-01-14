import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import api from '../../helpers/api'

import { ListBook } from './styled'

export default function Home() {

    const [ listBook, setListBook] = useState([])

    useEffect( () => {
        const getBook = async () => {
            const bookList = await api.getBookList()

            setListBook(bookList)
        }
        getBook()
    }, []) 

    return (
        
        <ListBook>
            {listBook.map((i,k ) => 
                <li key={k}> 
                    <img src={i.image} alt={i.title} />

                    <strong>{i.title}</strong>
                    <span>R$ {i.price}</span>

                    <button type="button">
                        <div className="CartIcon">
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
            )}
            

            
               
        </ListBook>
    )
}