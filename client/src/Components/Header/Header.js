import React from "react";
// import icon from ;
// import camera from ;
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div id="head">
			<div id="insta">
				<img src="/icon.png" id="icon" alt="icon"></img>
				<text id="logo">Instaclone</text>
			</div>
			<Link to="/posts/create">
				<button class="buttons" /*onClick="" */>
					<img src="/camera.png" id="camera" alt="camera"></img>
				</button>
			</Link>
		</div>
	);
}

export default Header;
