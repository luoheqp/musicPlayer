import fakeData from "@/config/fakeData.js";

const initState = {
  musicList: [],
};

// >>>>>> constant
const SET_MUSIC_LIST = "SET_MUSIC_LIST";

// >>>>>> action

// 设置播放歌曲列表
export const handleSetMusicList = () => {
  let data = fakeData;

  data.forEach((element, index) => {
    element.listPos = index;
  });

  return {
    type: SET_MUSIC_LIST,
    data: data,
  };
};

const reducer = (state = initState, { type, data }) => {
  switch (type) {
    case SET_MUSIC_LIST:
      return { ...state, musicList: data };
    default:
      return state;
  }
};

export default reducer;
