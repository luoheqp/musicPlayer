import { SongList as SongListApi, Song as SongApi } from "@/server/apis";

const initState = {
  musicList: [],
  songCatList: [],
  songList: [],
};

// >>>>>> constant
const SET_MUSIC_LIST = "SET_MUSIC_LIST";
const SET_SONG_CAT_LIST = "SET_SONG_CAT_LIST";
const SET_SONG_LIST = "SET_SONG_LIST";

// >>>>>> action

// 设置播放歌曲列表
export const handleSetMusicList = (id = 0) => async (dispatch) => {
  console.log(id)

  let {
    playlist: { trackIds },
  } = await SongListApi.getSongList(id || 440434590);
  let getTrackIds = trackIds.slice(0, 20).map((item) => item.id);

  let { songs } = await SongApi.getSongDetail(getTrackIds);

  let data = songs.map((item, index) => ({
    name: item.name,
    id: item.id,
    listPos: index,
    picUrl: item.al.picUrl,
  }));

  console.log(songs)

  dispatch({
    type: SET_MUSIC_LIST,
    data: data,
  });
};

// 获取歌单分类列表
export const handleGetSongCatList = () => async (dispatch) => {
  let { sub = [] } = await SongListApi.getSongCatList();

  dispatch({
    type: SET_SONG_CAT_LIST,
    data: sub,
  });
};

// 根据分类获取歌单
export const handleGetSongList = (cat = "全部") => async (dispatch) => {
  let { playlists = [] } = await SongListApi.getSongListByCat(cat);

  dispatch({
    type: SET_SONG_LIST,
    data: playlists,
  });
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MUSIC_LIST:
      return { ...state, musicList: action.data };
    case SET_SONG_CAT_LIST:
      return { ...state, songCatList: action.data };
    case SET_SONG_LIST:
      return { ...state, songList: action.data };
    default:
      return state;
  }
};

export default reducer;
