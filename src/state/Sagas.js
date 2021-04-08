import { put, takeEvery } from "redux-saga/effects"

import { addUser, REQUEST_ADD_USER } from "./actions"
import { sendRequestAdduser } from "./api"

export function* sendApiData(action) {
	try {
		const user = yield sendRequestAdduser(action.payload)
		yield put(addUser(user))
	} catch (e) {}
}

export default function* UsersSaga() {
	yield takeEvery(REQUEST_ADD_USER, sendApiData)
}
