const initState = {
  musicList: [],
};

// constant
const SET_MUSIC_LIST = "SET_MUSIC_LIST";

// action
export const handleSetMusicList = (data) => {
  data.forEach((element, index) => {
    element.listPos = index;
  });

  return {
    type: SET_MUSIC_LIST,
    data: data,
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MUSIC_LIST:
      return { ...state, musicList: action.data };
    default:
      return state;
  }
};

export default reducer;
