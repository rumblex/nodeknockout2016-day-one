import { POPULATION_GROWTH_FACTOR, EVENT_LOOP, EVENT_LOOP_CAP } from 'constants'
import {range, reduce, compose} from 'ramda'

const { floor, min } = Math

export default (state) => {
  return {
    ...state.cache,
    populationLog: [
      compose(
        calculateIntestNow,
        calculateInterestUntilNow,
      )(state.cache.populationLog)
    ]
  }
}

const calculateIntestNow = (previousValue) =>
  Date.now() - previousValue[1] < EVENT_LOOP
    ? previousValue
    : calculateIntest(previousValue, [0, Date.now()])

const calculateInterestUntilNow = (state) =>
  reduce(calculateIntest, [0, 0], state)

const calculateIntest = (sum, entry) => {
  const value = range(0, min(floor((entry[1] - sum[1]) / EVENT_LOOP), EVENT_LOOP_CAP))
    .reduce((result) => result * POPULATION_GROWTH_FACTOR, sum[0])
  return [value + entry[0], entry[1]]
}
