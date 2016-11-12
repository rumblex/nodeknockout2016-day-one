import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Game from 'components/game'
import {render} from 'react-dom'
import getMyPosition from 'helpers/get-my-position'
import tick from 'effects/tick'
import resize from 'effects/resize'

const initialState = {
  viewport: [window.innerWidth, window.innerHeight],
  bigBang: Date.now(),
  now: Date.now(),
  players: [
    {
      position: getMyPosition()
    }
  ],
  currentPlayer: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        now: action.payload
      }

    case 'RESIZE_VIEWPORT':
      return {
        ...state,
        viewport: action.payload
      }

    default:
      return state
  }
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

tick(store.dispatch)
resize(store.dispatch)

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
