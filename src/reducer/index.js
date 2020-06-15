import { combineReducers } from "redux";
import player from "./player";
import common from "./common";

export default combineReducers({
  player,
  common,
});
