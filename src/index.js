import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";

import App from "components/App.js";
import Welcome from "components/Welcome.js";
import Signup from "components/auth/Signup.js";
import reducers from "reducers";

const store = createStore(
	reducers,
	{}, //Initial state
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/signup" component={Signup} />
			</App>
		</Router>
	</Provider>,
	document.querySelector("#root")
);
