import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "reducers/auth.js";

export default combineReducers({
	auth: auth,
	form: formReducer
});
