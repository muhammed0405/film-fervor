/** @format */

import { IDogsAction, IUserState } from "../Interfaces/interFaces"
import { userActionsTypes } from "../actionTypes/actionTypes"

const initialState: IUserState = {
	films: [],
}

// reducer
export const userReducer = (
	state = initialState,
	action: IDogsAction
): IUserState => {
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
