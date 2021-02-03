import React from "react";
// import icon from ;
// import camera from ;
import "./Header.css";

function Header() {
	return (
		<div id="head">
			<div id="insta">
				<img src="/icon.png" id="icon" alt="icon"></img>
				<text id="logo">Instaclone</text>
			</div>
			<button class="buttons" /*onClick="" */>
				<img src="/camera.png" id="camera" alt="camera"></img>
			</button>
		</div>
	);
}

export default Header;
