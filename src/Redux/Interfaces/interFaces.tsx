/** @format */

import { userActionsTypes } from "../actionTypes/actionTypes"

export interface IFilms {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}
export interface IUserState {
	films: IFilms[]
}

export interface IGetFilms {
	type: userActionsTypes.GET_FILMS
	payload: IFilms[]
}

export type IUserAction = IGetFilms
