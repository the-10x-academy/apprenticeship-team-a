//import logo from "../../logo.svg";
import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="home">
			<div className="home__body">
				<img className="home__left" src="/lens-1418954@2x.png" alt="here"></img>
				{/* takes care of Image arrangement */}

				<div className="home__right">
					<div>
						<center>
							<h1 className="home__right-heading">10x Team 01</h1>

							<Link to="/Posts">
								<button className="home__right-button">Enter</button>
							</Link>
						</center>

						{/* takes care of button */}
					</div>
				</div>
			</div>
		</div>
	);
}
export default HomePage;
