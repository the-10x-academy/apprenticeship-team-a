import React, { useState } from "react";
import "./InstagramPage.css";
import Post from "../Post/Post";
import Header from "../Header/Header";
function InstagramPage() {
	const [posts, setPosts] = useState([
		{
			username: "srikar",
			location: "Hyderabad",
			date: Date.now(),
			description: "Iam srikar",
			imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
		},
		{
			username: "vineeeth",
			location: "Bangalore",
			date: Date.now(),
			description: "OHH I AM MAKING INSTACLONE",
			imageUrl:
				"https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=",
		},
		{
			username: "anshika",
			location: "Hyderabad",
			date: Date.now(),
			description: "AngelHere",
			imageUrl:
				"https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg",
		},
		{
			username: "akhil",
			location: "Hyderabad",
			date: Date.now(),
			description: "Solitude",
			imageUrl:
				"https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
		},
	]);
	return (
		<div>
			<Header />
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
export default InstagramPage;
