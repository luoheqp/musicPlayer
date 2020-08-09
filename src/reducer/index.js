import { combineReducers } from "redux";
import player from "./player";
import common from "./common";
import casual from "./casual";

export default combineReducers({
  player,
  common,
  casual
});
