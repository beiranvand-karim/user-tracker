import { createStore } from "redux"

const initialState = []

export const Store = createStore(
	Reducer,
	initialState,
	window.devToolsExtension && window.devToolsExtension()
)

function Reducer(state, { type, payload }) {
	switch (type) {
		case "ADD-USER":
			return (state = [...state, payload])
		default:
			return state
	}
}

export default Reducer
