export const REQUEST_ADD_USER = "REQUEST_ADD_USER"
export const ADD_USER = "ADD_USER"
export const DELETE_USER = "DELETE_USER"

export const addUser = (user) => ({
	type: ADD_USER,
	payload: user,
})
