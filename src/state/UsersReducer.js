import { createStore, applyMiddleware } from "redux"

export const ADD_USER = "ADD_USER"

export const store = createStore(
	(state, { type, payload }) => {
		switch (type) {
			case ADD_USER:
				if (state == null) {
					return (state = [payload])
				} else {
					return (state = [...state, payload])
				}
			default:
				return state
		}
	},
	null,
	applyMiddleware(({ getState }) => {
		return (next) => (action) => {
			console.log("will dispatch", action)
			console.log("state after dispatch", getState())
			return next(action)
		}
	})
)
