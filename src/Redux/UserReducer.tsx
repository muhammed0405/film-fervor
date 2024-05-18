/** @format */
import { IUserAction, IUserState } from "./Interfaces/interFaces"
import { userActionsTypes } from "./actionTypes/actionTypes"

const initialState: IUserState = {
	films: [],
}

const UserReducer = (state = initialState, action: IUserAction): IUserState => {
	switch (action.type) {
		case userActionsTypes.GET_FILMS: {
			return {
				...state,
				films: action.payload,
			}
		}
		default:
			return state
	}
}

export default UserReducer
