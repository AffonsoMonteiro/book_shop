import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'
import ReactTooltip from 'react-tooltip';


import { Container, CardProduct } from './styled'

export default function Cart() {
    return (
        <Container>
            <CardProduct >
                <thead>
                    <tr>
                        < th />
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>
                            <img src="https://m.media-amazon.com/images/I/61YBONj8-QL._AC_UY218_.jpg" alt="Livro" />
                        </td>
                        <td>
                            <div className="nameProduct">O último desejo - The Witche</div>
                            <div className="priceProduct">R$ 34,90 </div>
                        </td>
                        <td >
                            <div className="qtdButton">
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button type="button">
                                    <MdAddCircleOutline size={20} />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong  >R$ 69,80</strong>
                        </td>
                        <td  >
                            <button type="button" className="btnRemove" data-tip="Excluir"  > 
                                <MdDelete size={20}  />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </CardProduct>

            <footer>
                <button type="button" >Finalizar pedido</button>

                <div className="total">
                    <span>Total</span>
                    <strong> R$ 34,90 </strong>
                </div>
            </footer>
      <ReactTooltip place="top" effect="solid" />

        </Container>
    )
}