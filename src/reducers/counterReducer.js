import { INCREMENT, DECREMENT, RESET, ADD_COUNTER } from '../actions/'

const defaultState = [{ count: 22, label: 'abc' }]

const counterReducer = (state = defaultState, action) => {
	switch (action.type) {
		case INCREMENT:
			return state.map((obj, index) => {
				if (action.payload === index) {
					obj.count += 1
				}
				return obj
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

		case ADD_COUNTER:
			return [...state, { count: 0, label: action.payload }]

		default:
			return state

	}
}

export default counterReducer
