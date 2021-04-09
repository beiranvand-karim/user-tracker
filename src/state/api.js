import axios from "axios"

export const sendRequestAdduser = async (user) => {
	try {
		const request = {
			/* eslint-disable */
			method:"post",
			url:"http://localhost:8082/api/users",
			data: {
				"firstName":user.firstName,
				"lastName":user.lastName,
				"emailAddress":user.emailAddress
			},
			headers: {
				"content-type": "application/json",
				/* eslint-enable */
			},
		}
		const response = await axios(request)
		return response.data
	} catch (e) {}
}
