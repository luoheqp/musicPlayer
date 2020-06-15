const initState = {
  mediaPlayNow: {},
};

// constant
const SET_MEDIA_PLAY_NOW = "SET_MEDIA_PLAY_NOW";

// action
export const handleSetMediaPlayNow = (data) => ({
  type: SET_MEDIA_PLAY_NOW,
  data: data,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MEDIA_PLAY_NOW:
      return { ...state, mediaPlayNow: action.data };
    default:
      return state;
  }
};

export default reducer;
