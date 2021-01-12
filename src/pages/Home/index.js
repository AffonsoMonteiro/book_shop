import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
 

import { ListBook } from './styled'

export default function Home() {
    return (
        <ListBook>
            <li> 
                <img src="https://m.media-amazon.com/images/I/61YBONj8-QL._AC_UY218_.jpg" alt="" />

                <strong>O último desejo - The Witche</strong>
                <span>R$ 41,50</span>

                <button type="button">
                    <div className="CartIcon">
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li> 
                <img src="https://m.media-amazon.com/images/I/618iEKbcBDL._AC_UY218_.jpg" alt="" />

                <strong>Tempo do desprezo - The Witcher</strong>
                <span>R$ 45,00</span>

                <button type="button">
                    <div className="CartIcon">
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li> 
                <img src="https://m.media-amazon.com/images/I/618r42IcwRL._AC_UY218_.jpg" alt="" />

                <strong>Batismo de fogo - The Witcher</strong>
                <span>R$ 34,90</span>

                <button type="button">
                    <div className="CartIcon">
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li> 
                <img src="https://m.media-amazon.com/images/I/61ZdevvEQiL._AC_UY218_.jpg" alt="" />

                <strong>A Espada do Destino - The Witcher</strong>
                <span>R$ 33,90</span>

                <button type="button">
                    <div className="CartIcon">
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li> 
                <img src="https://m.media-amazon.com/images/I/61iT2u7EGhL._AC_UY218_.jpg" alt="" />

                <strong>O Sangue dos Elfos - The Witcher</strong>
                <span>R$ 39,90</span>

                <button type="button">
                    <div className="CartIcon">
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li> 
                <img src="https://m.media-amazon.com/images/I/71QPDt8hYrL._AC_UY218_.jpg" alt="" />

                <strong>A Senhora do lago - The Witcher</strong>
                <span>R$ 48,90</span>

                <button type="button">
                    <div className="CartIcon">
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li> 
                <img src="https://m.media-amazon.com/images/I/810Znwbjy3L._AC_UY218_.jpg" alt="" />

                <strong>Fogo & Sangue</strong>
                <span>R$ 34,90</span>

                <button type="button">
                    <div className="CartIcon">
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li> 
                <img src="https://m.media-amazon.com/images/I/91PglZzF9kL._AC_UY218_.jpg" alt="" />

                <strong>A fúria dos reis: As Crônicas de Gelo e Fogo</strong>
                <span>R$ 63,90</span>

                <button type="button">
                    <div className="CartIcon">
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
        </ListBook>
    )
}