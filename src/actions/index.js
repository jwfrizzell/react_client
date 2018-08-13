import { AUTH_USER, AUTH_ERROR } from "actions/types.js";
import axios from "axios";

//Create action creator signup.
export const signup = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post(
			"http://localhost:3090/signup",
			formProps
		);

		dispatch({
			type: AUTH_USER,
			payload: response.data.token
		});
		callback();
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
			payload: "Email in use"
		});
	}
};
