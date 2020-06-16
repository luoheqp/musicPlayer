const initState = {
  mediaPlayNow: {},
  duration: 0,
  currentTime: 0,
};

// >>>>>> constant
const SET_MEDIA_PLAY_NOW = "SET_MEDIA_PLAY_NOW";
const SET_MEDIA_DURATION = "SET_MEDIA_DURATION";
const SET_MEDIA_CURRENT_TIME = "SET_MEDIA_CURRENT_TIME";

// >>>>>> action

export const handleSetMediaPlayNow = (data) => ({
  type: SET_MEDIA_PLAY_NOW,
  data: data,
});

export const handleSetMediaDuration = (data) => ({
  type: SET_MEDIA_DURATION,
  data: data,
});

export const handleSetMediaCurrentTime = (data) => ({
  type: SET_MEDIA_CURRENT_TIME,
  data: data,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MEDIA_PLAY_NOW:
      return { ...state, mediaPlayNow: action.data };
    case SET_MEDIA_DURATION:
      return { ...state, duration: action.data };
    case SET_MEDIA_CURRENT_TIME:
      return { ...state, currentTime: action.data };
    default:
      return state;
  }
};

export default reducer;
