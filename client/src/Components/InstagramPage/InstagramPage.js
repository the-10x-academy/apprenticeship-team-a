import React, { useState, useEffect } from "react";
import "./InstagramPage.css";
import Post from "../Post/Post";
import Header from "../Header/Header";
function InstagramPage() {
	const [posts, setPosts] = useState([]);
	const [Loading, setLoading] = useState(false);
	let postarray = [];
	useEffect(() => {
		fetch("http://localhost:9000/post")
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setPosts(result.postData);
				setLoading(true);
			});
	}, []);
	postarray = [...posts].reverse();
	if (!Loading || postarray.length === 0) {
		return (
			<div>
				<Header />
				<h3 className="post__Loading">
					<i>Loading.....</i>
				</h3>
			</div>
		);
	}
	return (
		<div>
			<Header />
			<div className="InstaPagePosts">
				{postarray.map((post) => (
					<Post
						username={post.username}
						location={post.location}
						image={post.image}
						description={post.description}
						date={post.timestamp}
						dblikes={post.likes}
						postId={post._id}
					/>
				))}
			</div>
		</div>
	);
}
export default InstagramPage;
