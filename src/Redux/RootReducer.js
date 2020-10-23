import { createStore } from "redux"

const initialState = []

export const Store = createStore(
	Reducer,
	initialState,
	window.devToolsExtension && window.devToolsExtension()
)

function Reducer(state, { type, payload }) {
	return state
}

export default Reducer
