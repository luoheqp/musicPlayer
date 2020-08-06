import { SET_PERSONAL_FM_LIST } from "./constant";

const initState = {};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PERSONAL_FM_LIST:
      {}
    default:
      return state;
  }
};

export default reducer;
