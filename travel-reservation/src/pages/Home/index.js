import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addReserve } from '../../store/modules/reserve/actions'
import { MdFlightTakeoff } from 'react-icons/md';
import api from '../../server.json'

import './styles.css';

function Home() {
  const dispatch = useDispatch()
  const [trips, setTrips] = useState([])

  useEffect(() => {
    function loadApi() {
      const data = api;
      setTrips(data.trips)
    }
    loadApi()
  }, [])

  const handleAdd = (trip) => {
    dispatch(addReserve(trip))
  }

  return(
    <div className="box">
      {trips.map(trip => (
        <div className="box__item" key={trip.id}>
          <div>
            <img className="box__item-image" src={trip.image} alt={trip.title} />
            <h3 className="box__item-title">{trip.title}</h3>
            <span>{trip.status ? 'Disponível' : 'Indisponível'}</span>
          </div>
          <div>
            <button className="box__item-button" type="button" onClick={() => handleAdd(trip)}>
              <div>
                <MdFlightTakeoff size={16} color="#FFF" />
              </div>
              <span className="box__item-span">SOLICITAR RESERVA</span>
            </button>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default Home;