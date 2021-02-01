import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NoPageFound from "./Components/404";
import InstagramPage from "./Components/InstagramPage/InstagramPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/posts" component={InstagramPage} />
				<Route path="*" component={NoPageFound} />
			</Switch>
		</Router>
	);
}

export default App;
