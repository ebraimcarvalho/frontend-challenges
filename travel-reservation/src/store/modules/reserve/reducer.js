import produce from 'immer'
import api from '../../../server.json'

function reserve(state = [], action) {
  switch(action.type) {
    case 'ADD_RESERVE':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.trip.id)
        const stockIndex = api.stock.findIndex(trip => trip.id === action.trip.id)
        if(tripIndex >= 0) {
          const newAmount = draft[tripIndex].amount;
          if((newAmount + 1 ) <= api.stock[stockIndex].amount){
            draft[tripIndex].amount += 1
          } else {
            alert(`Estoque máximo para esse item: ${newAmount}`)
            draft[tripIndex].amount = newAmount;
          }
        } else {
          draft.push({
            ...action.trip,
            amount: 1
          })
        }
      })
    case 'REMOVE_RESERVE':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id)
        if(tripIndex >= 0) {
          draft.splice(tripIndex, 1)
        }
      })
    case 'UPDATE_RESERVE':{
      if(action.amount <= 0) {
        return state
      }
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id)
        const stockIndex = api.stock.findIndex(trip => trip.id === action.id)
        if(tripIndex >= 0) {
          const maxAmount = api.stock[stockIndex].amount
          const newAmount = Number(action.amount);
          if(newAmount <= maxAmount){
            draft[tripIndex].amount = newAmount
          } else {
            alert(`Estoque máximo para esse item: ${maxAmount}`)
            draft[tripIndex].amount = newAmount - 1;
          }          
        }
      })
      }
    default:
      return state
  }
}

export default reserve