/** @format */

import { useEffect } from "react"
import { UseTypedDispatch } from "../../Redux/customHooks/useTypedDispatch"
import { useTypedSelectorHook } from "../../Redux/customHooks/useTypedSelectorHook"

export function TopRated() {
	const { getFilms } = UseTypedDispatch()
	const films = useTypedSelectorHook(state => state.user.films)
	useEffect(() => {
		getFilms("1", "top_rated")
	}, [])

	console.log("films", films)
	return (
		<div className="flex gap-4 sm:gap-10 flex-wrap justify-center p-2 sm:p-1">
			<div
				className="flex flex-wrap w-[90%] gap-6"
				style={{
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				{films ? (
					films.map(el => (
						<div>
							<h1 className="text-red">{el.title}</h1>
							<img
								className="w-[300px]"
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
