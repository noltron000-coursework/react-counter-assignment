import { INCREMENT, DECREMENT, RESET } from '../actions/'

const defaultState = [22, 33, 44]

const counterReducer = (state = defaultState, action) => {
  switch(action.type) {
    case INCREMENT: 
      return state.map((count, index) => {
        if (action.payload === index) {
          return count += 1
        }
        return count
      })

    case DECREMENT: 
      return state.map((count, index) => {
        if (action.payload === index) {
          return count -= 1
        }
        return count
      })

    case RESET: 
      return state.map((count, index) => {
        if (action.payload === index) {
          return 0
        }
        return count
      })

    default: 
      return state

  }
}

export default counterReducer