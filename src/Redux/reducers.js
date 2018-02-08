import { combineReducers } from "redux";

const placeholder = (state = {}, action) => {
	if (action.type === "PLACEHOLDER_ACTION") {
		return action.payload;
	}
	return state;
};

const rootReducer = combineReducers({ placeholder });

export default rootReducer;
