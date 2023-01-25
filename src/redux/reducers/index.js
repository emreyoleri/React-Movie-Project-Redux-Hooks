import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import cartReducer from "./cartReducer";

export const reducers = combineReducers({
  movieReducer,
  cartReducer,
});

export default reducers;
