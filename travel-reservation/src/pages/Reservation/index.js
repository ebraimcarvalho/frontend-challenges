import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateReserveAmount } from '../../store/modules/reserve/actions'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import './styles.css';

function Reservation() {
  const dispatch = useDispatch()
  const reserves = useSelector(state => state.reserve)
  const reservesAmount = reserves.reduce((acc, att) => acc + att.amount ,0)

  const handleRemove = (id) => {
    dispatch(removeReserve(id))
  }

  const handleIncrement = (reserve) => {
    dispatch(updateReserveAmount(reserve.id, reserve.amount + 1))
  }

  const handleDecrement = (reserve) => {
    dispatch(updateReserveAmount(reserve.id, reserve.amount - 1))
  }

  return(
    <div className="reservation">
      <h1 className="reservation__title">Você tem {reservesAmount} {reservesAmount <= 1 ? 'reserva' : 'reservas'}</h1>
      <div className="reservation__box">

        {reserves.map(reserve => (
          <div key={reserve.id} className="reservation__item">
            <img className="reservation__image" src={reserve.image} alt={reserve.title} />
            <div className="reservation__div-text">
              <h3 className="reservation__text">{reserve.title}</h3>
              <div className="reservation__amount">
                <button type="button" onClick={() => handleDecrement(reserve)}>
                  <MdRemoveCircle size={20} color="#191919"/>
                </button>
                <span className="reservation__span">{reserve.amount}</span>
                <button type="button" onClick={() => handleIncrement(reserve)}>
                  <MdAddCircle size={20} color="#191919"/>
                </button>
              </div>
            </div>
            <button className="reservation__button" type="button" onClick={() => handleRemove(reserve.id)}>
              <MdDelete size={20} color="#191919" />
            </button>
          </div>
        ))}
        
        
      </div>

      <footer className="reservation__footer">
        <button className="reservation__footer-button" type="button">Solicitar Reservas</button>
      </footer>
    </div>
  )
}

export default Reservation;