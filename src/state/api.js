import axios from "axios"

export const sendRequestAdduser = async (user) => {
	try {
		/* eslint-disable */
		const response = await axios.post("http://localhost:8082/api/users", null, {
			params: {
				"id": user.id,
				"firstName": user.firstName,
				"lastName": user.lastName,
				"emailAddress": user.emailAddress
			},
			headers: {
				"content-type": "application/x-www-form-urlencoded",
			}
		})
		/* eslint-enable */
		return response.data
	} catch (e) {}
}
