import React, { Component } from 'react'
import { render } from 'react-dom'
import {
  Deck, Spectacle, Slide, Text
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import System from 'components/system'
import 'styles.scss'

const theme = createTheme({
  primary: '#ebebeb'
}, {
  primary: 'Lato',
  secondary: 'Lato'
})

const system = {
  noise: 0.1,
  star: {
    noise: 0.1,
    name: 'psoenri',
    lifespan: 0.5341289069037884,
    birth: 0.24737509790977166,
    type: 'G',
    radius: 16
  },
  planets: [
    {
      noise: 0.4288907456211746,
      radius: 6,
      material: 'vanadium',
      gravity: 4.4602402325253925,
      populationCapacity: 22351490
    },
    {
      noise: 0.6234988542273641,
      radius: 6,
      material: 'manganese',
      gravity: 6.347938886005431,
      populationCapacity: 32488431
    },
    {
      noise: 0.990128728793934,
      radius: 7,
      material: 'tellurium',
      gravity: 9.90424866930116,
      populationCapacity: 51585815
    }
  ],
  orbits: [
    {
      startTranslation: 154,
      radius: 52
    },
    {
      startTranslation: 224,
      radius: 75
    },
    {
      startTranslation: 356,
      radius: 99
    }
  ],
  stages: [
    {
      stage: 'Accretion Disk',
      start: 0
    },
    {
      stage: 'Starting Fusion...',
      start: 0.2445973201319939
    },
    {
      stage: 'Star',
      start: 0.24737509790977166
    },
    {
      stage: 'Brown Dwarf',
      start: 0.7815040048135601
    }
  ]
}

class Slides extends Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck>
          <Slide>
            <Text>Hello</Text>
          </Slide>
          <Slide>
            <svg
              width='500'
              height='500'
              viewBox={'-250 -250 500 500'}
              style={{ background: '#10052b' }}>>
              <System {...system} stage='Star' translations={[0, 0, 0]} />
            </svg>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}

render(<Slides />, document.getElementById('root'))
