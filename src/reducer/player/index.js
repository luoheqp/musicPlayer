import { CYCLE_MODE_LIST } from "@/config/playerConfig";

import {
  SET_MEDIA_PLAY_NOW,
  SET_MEDIA_DURATION,
  SET_MEDIA_SOURCE,
  SET_MEDIA_CURRENT_TIME,
  SET_CHANGE_CURRENT_TIME,
  CHANGE_PLAY_STATE,
  CHANGE_CYCLE_MODE,
  CHANGE_MUTE_STATE,
  SET_LYRIC_FOR_THIS_SONG,
} from "./constant";

const initState = {
  mediaPlayNow: {}, // 当前播放音乐对象
  playState: false,
  duration: 0, // 总播放时间
  source: undefined,
  currentTime: 0, // 当前播放时间
  changeCurrentTime: 0, // 修改后的时间点
  cycleMode: 0, // 播放模式
  muteState: false, // 是否静音
  lyricForThisSong: [{}, {}], // 当前歌曲歌词
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MEDIA_PLAY_NOW:
      return { ...state, mediaPlayNow: action.data };
    case SET_MEDIA_DURATION:
      return { ...state, duration: action.data };
    case SET_MEDIA_CURRENT_TIME:
      return { ...state, currentTime: action.data };
    case SET_MEDIA_SOURCE:
      return { ...state, source: action.data };
    case SET_CHANGE_CURRENT_TIME:
      return { ...state, changeCurrentTime: action.data };
    case CHANGE_PLAY_STATE:
      return { ...state, playState: action.data };
    case CHANGE_CYCLE_MODE:
      let len = CYCLE_MODE_LIST.length;
      let cycleMode = state.cycleMode + 1;
      cycleMode = cycleMode >= len ? 0 : cycleMode;
      return { ...state, cycleMode: cycleMode };
    case CHANGE_MUTE_STATE:
      return { ...state, muteState: !state.muteState };
    case SET_LYRIC_FOR_THIS_SONG:
      return { ...state, lyricForThisSong: action.data };
    default:
      return state;
  }
};

export default reducer;
