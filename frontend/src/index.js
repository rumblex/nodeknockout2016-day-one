import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Game from 'components/game'
import {render} from 'react-dom'
import getMyPosition from 'helpers/get-my-position'
import tick from 'effects/tick'
import resize from 'effects/resize'
import {
  ENERGY_INITIAL,
  POPULATION_INITIAL,
  UNIVERSE_BIG_BANG,
  UNIVERSE_LIFESPAN
} from './constants'
import 'styles.scss'

const initialState = {
  viewport: [window.innerWidth, window.innerHeight],
  bigBang: UNIVERSE_BIG_BANG,
  heatDeath: UNIVERSE_BIG_BANG + UNIVERSE_LIFESPAN,
  now: Date.now(),
  players: [
    {
      position: getMyPosition(),
      populationLog: [
        [POPULATION_INITIAL, Date.now()]
      ],
      energyLog: [
        [ENERGY_INITIAL, Date.now()]
      ]
    },
    {
      position: [getMyPosition()[0] + 200, getMyPosition()[1] + 200],
      populationLog: [
        [POPULATION_INITIAL, Date.now()]
      ]
    }
  ],
  solarSystems: [],
  selectedSolarSystemPosition: null,
  selectedPlanetIndex: null,
  currentPlayer: 0,
  cameraPositionStart: getMyPosition(),
  cameraPosition: [0, 0]
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

    case 'SELECT_SOLAR_SYSTEM':
      return {
        ...state,
        selectedSolarSystemPosition: action.payload,
        selectedPlanetIndex: null
      }

    case 'SELECT_PLANET':
      return {
        ...state,
        selectedSolarSystemPosition: action.payload.solarSystem,
        selectedPlanetIndex: action.payload.planetIndex
      }

    case 'MOVE':
      return {
        ...state,
        cameraPosition: state.cameraPosition.map((v, i) => v - action.payload[i]),
        players: state.players.map((player, index) => (
          index !== state.currentPlayer
            ? player
            : {
              ...player,
              position: player.position.map((v, i) => v + action.payload[i])
            }
        ))
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
