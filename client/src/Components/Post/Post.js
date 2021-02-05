import React from "react";
import "./Post.css";
function Post({ username, location, image, description, date }) {
	return (
		<div className="">
			<div className="post">
				<div className="post__header">
					{/* {header--> username + location + moreIcon} */}
					<div className="post__headerInfo">
						<h3>{username}</h3>
						<p>{location}</p>
					</div>

					<img
						className="post__headerMoreIcon"
						src="/moreIcon.png"
						alt="moreIcon"
					/>
				</div>
				{/* {postBody--> Image} */}
				<img
					className="post__image"
					src={"http://localhost:9000/" + image}
					alt="loading"
				/>
				<div className="post__footer">
					{/* {post footer --> hearticon+shareIcon+date+likes+Caption} */}
					<div className="post__footerUpper">
						<div className="post__footerUpper-Icons">
							<img
								className="post__footerUpper-heartIcon"
								src="/heartIcon.png"
								alt="heartIcon"
							/>
							<img
								className="post__footerUpper-shareIcon"
								src="/shareIcon.png"
								alt="shareIcon"
							/>
						</div>
						{date}
					</div>
					<div className="post__footerMiddle">
						<p>64 likes</p>
					</div>
					<h4 className="post__caption">{description}</h4>
				</div>
			</div>
		</div>
	);
}

export default Post;
