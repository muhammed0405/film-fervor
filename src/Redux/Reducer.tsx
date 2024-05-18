/** @format */

import { combineReducers } from "redux"
import UserReducer  from "./UserReducer"
const rootReducer = combineReducers({
	user: UserReducer,
})

export type RootState = ReturnType<typeof rootReducer>
