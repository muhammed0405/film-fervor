/** @format */

import { useEffect } from "react"
import { UseTypedDispatch } from "../../Redux/customHooks/useTypedDispatch"
import { useTypedSelectorHook } from "../../Redux/customHooks/useTypedSelectorHook"
import "./Popular.scss"

export function Popular() {
	const { getFilms } = UseTypedDispatch()
	const films = useTypedSelectorHook(state => state.user.films)
	useEffect(() => {
		getFilms("1", "popular")
	}, [])

	return (
		<div className="popular">
			<div className="popular__card_wrap">
				{films ? (
					films.map(el => (
						<div className="popular__card">
							<h1 className="poular__card__title">{el.title}</h1>
							<img
								className="popular__card__image"
								width="300px"
								src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`}
								alt=""
							/>
						</div>
					))
				) : (
					<h1>NO fil.s</h1>
				)}
			</div>
		</div>
	)
}
