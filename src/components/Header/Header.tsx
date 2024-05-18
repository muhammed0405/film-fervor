/** @format */
import { NavLink } from "react-router-dom"
import Logo from "../../assets/img/logo.svg"
const Header = () => {
	return (
		<div id="header">
			<div className="header__inner container">
				<div className="header__logo logo">
					<NavLink to="/">
						<img
							height="66px"
							width="160px"
							className="logo__image"
							src={Logo}
							alt="film-fervor"
							loading="lazy"
						/>
					</NavLink>
				</div>

				<nav className="header__menu hidden-mobile">
					<ul className="header__menu__list">
						<li className="header__menu-item">
							<NavLink className="header__menu-link" to="/">
								Home
							</NavLink>
						</li>
						<li className="header__menu-item">
							<NavLink className="header__menu-link" to="/popular">
								Popular
							</NavLink>
						</li>
						<li className="header__menu-item">
							<NavLink className="header__menu-link" to="/now-playing">
								Now Playing
							</NavLink>
						</li>
						<li className="header__menu-item">
							<NavLink className="header__menu-link" to="/top-rated">
								Top Rated
							</NavLink>
						</li>
						<li className="header__menu-item">
							<NavLink className="header__menu-link" to="/upcoming">
								Upcoming
							</NavLink>
						</li>
					</ul>
				</nav>

				<div className="header__right__block">
					input.header__search.input.
					<button className="header__button button button__buy">

					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
