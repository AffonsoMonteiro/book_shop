import React from 'react'
import { Container, ModalBody} from './styled'

export default function Modal({status, setStatus}) {

    function handleModal(e) {
        if(e.target.classList.contains('modalBg')) {
            setStatus(false)
        }
    }

    function close() {
        setStatus(false)    
    }

    return (
        <Container className="modalBg" status={status} onClick={handleModal} >
            <ModalBody>
                <p>Ganhe desconto, comprando mais de uma unidade distintas!</p>
                <div className="listDiscount" > 
                   <div className="discount">2 livros distintos: 5%</div>
                   <div className="discount">3 livros distintos: 10%</div>
                   <div className="discount">4 livros distintos: 20%</div>
                   <div className="discount">5 ou mais livros distintos: 25%</div>
                </div>
                <button onClick={close}>Fechar</button>
            </ModalBody>
            
        </Container>
    ) 

}