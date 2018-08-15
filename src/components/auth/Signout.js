import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import requireAuth from "components/requireAuth.js";

class Signout extends Component {
	componentDidMount() {
		this.props.signout();
	}
	render() {
		return <div>Sorry to see yout go!</div>;
	}
}

export default connect(
	null,
	actions
)(requireAuth(Signout));
