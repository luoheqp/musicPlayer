import {
  SongList as SongListApi,
  Song as SongApi,
  Common as CommonApi,
} from "@/server/apis";

const initState = {
  songCollectInfo: {}, // 歌曲列表
  musicList: [], // 歌曲列表
  playingMusicList: [], // 正在播放的列表
  songCatList: [], // 歌曲分类列表
  songCollectList: [], // 根据分类获取的歌单列表
  profile: {}, // 个人信息
  recommendedPlaylist: [], // 推荐歌单列表
  newMusicList: [], // 新歌推送列表
  tenNiceNewDiskList: [], // 最新前十网友精选碟
};

// >>>>>> constant
const SET_SONG_COLLECT_INFO = "SET_SONG_COLLECT_INFO";
const SET_PLAYING_MUSIC_LIST = "SET_PLAYING_MUSIC_LIST";
const SET_SONG_CAT_LIST = "SET_SONG_CAT_LIST";
const SET_SONG_COLLECT_LIST = "SET_SONG_COLLECT_LIST";
const SET_LOGIN_TOKEN = "SET_LOGIN_TOKEN";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_TEN_NICE_NEW_DISK_LIST = "SET_TEN_NICE_NEW_DISK_LIST";
const SET_RECOMMANDED_PLAYLIST = "SET_RECOMMANDED_PLAYLIST";
const SET_NEW_MUSIC_LIST = "SET_NEW_MUSIC_LIST";

// >>>>>> action

// 获取多个音乐详情
const handleGetMusicInfo = async (ids) => {
  let { songs } = await SongApi.getSongDetail(ids);

  let data = songs.map((item, index) => ({
    name: item.name,
    id: item.id,
    listPos: index,
    picUrl: item.al.picUrl,
  }));

  return data;
};

// 获取指定歌单详情
export const handleSetSongCollectInfo = (collectId) => async (dispatch) => {
  let {
    playlist: { name, trackIds, coverImgUrl, description, id, playCount, tags },
  } = await SongListApi.getSongList(collectId);

  trackIds = trackIds.map((item) => item.id);

  const data = await handleGetMusicInfo(trackIds);

  dispatch({
    type: SET_SONG_COLLECT_INFO,
    data: {
      name,
      coverImgUrl,
      description,
      id,
      playCount,
      tags,
      songList: data,
    },
  });
};

// 设置播放中的歌曲列表
export const handleSetPlayingMusicList = (id) => async (dispatch) => {
  let {
    playlist: { trackIds },
  } = await SongListApi.getSongList(id);

  trackIds = trackIds.map((item) => item.id);

  const data = await handleGetMusicInfo(trackIds);

  dispatch({
    type: SET_PLAYING_MUSIC_LIST,
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
export const handleGetSongCollectList = (cat = "全部") => async (dispatch) => {
  let { playlists = [] } = await SongListApi.getSongListByCat(cat);

  dispatch({
    type: SET_SONG_COLLECT_LIST,
    data: playlists,
  });
};

// 登录接口
export const handlePostToLogin = ({ phone, password }) => async (dispatch) => {
  try {
    let { cookie: token } = await CommonApi.postToLogin({ phone, password });

    dispatch({
      type: SET_LOGIN_TOKEN,
      data: token,
    });
  } catch (e) {}
};

// 获取登录状态
export const handleGetLoginStatus = () => async (dispatch) => {
  try {
    const { profile } = await CommonApi.getLoginStatus();
    dispatch({
      type: SET_USER_PROFILE,
      data: profile,
    });
  } catch (e) {}
};

export const handleGetTenNiceNewDiskList = () => async (dispatch) => {
  try {
    const { playlists } = await CommonApi.getTenNiceNewDiskList();
    dispatch({
      type: SET_TEN_NICE_NEW_DISK_LIST,
      data: playlists,
    });
  } catch (e) {}
};

export const handleGetRecommendedPlaylist = () => async (dispatch) => {
  try {
    const { result } = await CommonApi.getRecommendedPlaylist();
    dispatch({
      type: SET_RECOMMANDED_PLAYLIST,
      data: result,
    });
  } catch (e) {}
};

export const handleGetNewMusiclistByArea = ({ type = 0 }) => async (
  dispatch
) => {
  try {
    const data = await CommonApi.getNewMusiclistByArea({ type });
    dispatch({
      type: SET_NEW_MUSIC_LIST,
      data: data,
    });
  } catch (e) {}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SONG_COLLECT_INFO:
      return { ...state, songCollectInfo: action.data };
    case SET_PLAYING_MUSIC_LIST:
      return { ...state, musicList: action.data };
    case SET_SONG_CAT_LIST:
      return { ...state, songCatList: action.data };
    case SET_SONG_COLLECT_LIST:
      return { ...state, songCollectList: action.data };
    case SET_USER_PROFILE:
      return { ...state, profile: action.data };
    case SET_TEN_NICE_NEW_DISK_LIST:
      return { ...state, tenNiceNewDiskList: action.data };
    case SET_RECOMMANDED_PLAYLIST:
      return { ...state, recommendedPlaylist: action.data };
    case SET_NEW_MUSIC_LIST:
      return { ...state, newMusicList: action.data };
    default:
      return state;
  }
};

export default reducer;
