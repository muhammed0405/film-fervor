/** @format */

import axios from "axios"
import { Dispatch } from "redux"
import { userActionsTypes } from "../actionTypes/actionTypes"
import { key } from "../API_KEY/API_key"
import { IUserAction } from "../Interfaces/interFaces"

export const getFilms =
	(page: string, category: string) =>
	async (dispatch: Dispatch<IUserAction>) => {
		try {
			const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${key}&language=en-US&page=${page}`
			const response = await axios.get(url)
			dispatch({
				type: userActionsTypes.GET_FILMS,
				payload: response.data.results,
			})
		} catch (error) {
			console.error(error)
		}
	}
