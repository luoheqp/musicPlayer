import { SET_PERSONAL_FM_LIST } from "./constant";

const initState = {
  casualList: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PERSONAL_FM_LIST:
      return { ...state, casualList: action.data };
    default:
      return state;
  }
};

export default reducer;
