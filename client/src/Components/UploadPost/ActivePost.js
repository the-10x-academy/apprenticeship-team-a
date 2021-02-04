import React from "react";
import "./ActivePost.css";

export default function ActivePost(props) {
	console.log(props.Author, props.Location, props.Description, props.Image);
	if (
		props.Author !== "" &&
		props.Location !== "" &&
		props.Description !== "" &&
		props.Image !== ""
	) {
		return (
			<div className="Activepost">
				<button
					onClick={() => props.postDetails()}
					className="Activepostbutton"
				>
					Post
				</button>
			</div>
		);
	} else {
		return (
			<div className="postbox">
				<label className="postbutton">Post</label>
			</div>
		);
	}
}
