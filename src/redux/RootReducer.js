import { createStore } from "redux"

const initialState = null

export const Store = createStore(Reducer, initialState)

function Reducer(state, { type, payload }) {
	switch (type) {
		case "ADD-USER":
			if (state == null) {
				return (state = [payload])
			} else {
				return (state = [...state, payload])
			}
		default:
			return state
	}
}
