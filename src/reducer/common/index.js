import { Song as SongApi } from "@/server/apis";

const initState = {
  musicList: [],
};

// >>>>>> constant
const SET_MUSIC_LIST = "SET_MUSIC_LIST";

// >>>>>> action

// 设置播放歌曲列表
export const handleSetMusicList = (id = 0) => async (dispatch) => {
  let {
    playlist: { trackIds },
  } = await SongApi.getSongList(440434590);
  let getTrackIds = trackIds.slice(0, 20).map((item) => item.id);

  let { songs } = await SongApi.getSongDetail(getTrackIds);

  let data = songs.map((item, index) => ({
    name: item.name,
    id: item.id,
    listPos: index,
    picUrl: item.al.picUrl
  }));

  dispatch({
    type: SET_MUSIC_LIST,
    data: data,
  });
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
