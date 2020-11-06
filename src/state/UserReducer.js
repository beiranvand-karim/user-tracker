import { createStore } from "redux"

export const AddUserConstant = "ADD_USER"

export const Store = createStore((state, { type, payload }) => {
	switch (type) {
		case AddUserConstant:
			if (state == null) {
				return (state = [payload])
			} else {
				return (state = [...state, payload])
			}
		default:
			return state
	}
}, null)
