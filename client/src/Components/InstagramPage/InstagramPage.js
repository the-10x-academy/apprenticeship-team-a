import React, { useState } from "react";
import "./InstagramPage.css";
import Post from "../Post/Post";
​
function InstagramPage() {
	const [posts, setPosts] = useState([
		{
            username: "srikar",
			location: "Hyderabad",
			date: Date.now(),
			description: "Iam srikar"
			imageUrl: "https://www.w3schools.com/howto/img_avatar.png"
        }
	]);
​
	return (
		<div>
			<div className="InstaPagePosts">
				{posts.map((post) => (
					<Post
						username={post.username}
						location={post.location}
						imageUrl={post.imageUrl}
						description={post.description}
						date={post.date}
					/>
				))}
				;
			</div>
		</div>
	);
}
​
export default InstagramPage;
