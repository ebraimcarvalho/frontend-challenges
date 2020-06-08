import React from 'react';
import { MdDelete } from 'react-icons/md'
import './styles.css';

function Reservation() {
  return(
    <div className="reservation">
      <h1 className="reservation__title">Você tem 2 reservas</h1>
      <div className="reservation__box">
        <div className="reservation__item">
          <img className="reservation__image" src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="Maceió"/>
          <div className="reservation__div-text">
            <h3 className="reservation__text">Viagem Maceió 7 Dias</h3>
            <span className="reservation__span">Quantidade: 2</span>
          </div>
          <button className="reservation__button" type="button" onClick={() => {}}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
        
      </div>

      <footer className="reservation__footer">
        <button className="reservation__footer-button" type="button">Solicitar Reservas</button>
      </footer>
    </div>
  )
}

export default Reservation;