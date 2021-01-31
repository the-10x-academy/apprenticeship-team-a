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

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/404" component={NoPageFound} />

				<Redirect to="/404" />
			</Switch>
		</Router>
	);
}

export default App;
