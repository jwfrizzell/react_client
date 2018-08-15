import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";

import App from "components/App.js";
import Welcome from "components/Welcome.js";
import Signup from "components/auth/Signup.js";
import Feature from "components/Feature.js";
import Signout from "components/auth/Signout.js";
import Signin from "components/auth/Signin.js";
import reducers from "reducers";

const store = createStore(
	reducers,
	{
		auth: { authenticated: localStorage.getItem("token") }
	}, //Initial state
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/feature" component={Feature} />
				<Route exact path="/signout" component={Signout} />
				<Route exact path="/signin" component={Signin} />
			</App>
		</Router>
	</Provider>,
	document.querySelector("#root")
);
