import React from "react";
import icon from "./icon.png";
import camera from "./camera.png";
import "./header.css";

function Header() {
	return (
		<div id="head">
			<div id="insta">
				<img src={icon} id="icon" alt="icon"></img>
				<text id="logo">Instaclone</text>
			</div>
			<button class="buttons" /*onClick="" */>
				<img src={camera} id="camera" alt="camera"></img>
			</button>
		</div>
	);
}

export default Header;
