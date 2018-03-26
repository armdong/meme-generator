import { combineReducers } from 'redux'
import { RECEIVE_MEMES, NEW_MEME } from '../actions'

const memes = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_MEMES:
      return action.memes
    default:
      return state
  }
}

const myMemes = (state = [], action) => {
  switch(action.type) {
    case NEW_MEME:
      return [...state, action.meme]
    default:
      return state
  }
}

export default combineReducers({ memes, myMemes })