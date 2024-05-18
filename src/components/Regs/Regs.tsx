/** @format */
import { RiArrowRightSFill } from "react-icons/ri"
import "./Regs.scss"

export function Regs() {
	return (
		<div className="container">
			<div className="regs__wrap">
				<div className="regs">
					<div className="regs__title">
						<h1>Your Personal cinema on your devices</h1>
						<p>All news in one place</p>
					</div>

					<div className="regs__form">
						<form action="">
							<input type="number" placeholder="Phone number" />
							<button type="submit">
								Get Started <RiArrowRightSFill />
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
