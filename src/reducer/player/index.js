import { CYCLE_MODE_LIST } from "@/config/playerConfig";

const initState = {
  mediaPlayNow: {}, // 当前播放音乐对象
  duration: 0, // 总播放时间
  currentTime: 0, // 当前播放时间
  changeCurrentTime: 0, // 修改后的时间点
  cycleMode: 0, // 播放模式
  muteState: false, // 是否静音
};

// >>>>>> constant
const SET_MEDIA_PLAY_NOW = "SET_MEDIA_PLAY_NOW";
const SET_MEDIA_DURATION = "SET_MEDIA_DURATION";
const SET_MEDIA_CURRENT_TIME = "SET_MEDIA_CURRENT_TIME";
const SET_CHANGE_CURRENT_TIME = "SET_CHANGE_CURRENT_TIME";
const CHANGE_CYCLE_MODE = "CHANGE_CYCLE_MODE";
const CHANGE_MUTE_STATE = "CHANGE_MUTE_STATE";

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

export const handleSetMediaChangeCurrentTime = (data) => ({
  type: SET_CHANGE_CURRENT_TIME,
  data: data,
});

export const handleChangeMediaCycleMode = () => ({
  type: CHANGE_CYCLE_MODE,
});

export const handleChangeMediaMuteState = () => ({
  type: CHANGE_MUTE_STATE,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MEDIA_PLAY_NOW:
      return { ...state, mediaPlayNow: action.data };
    case SET_MEDIA_DURATION:
      return { ...state, duration: action.data };
    case SET_MEDIA_CURRENT_TIME:
      return { ...state, currentTime: action.data };
    case SET_CHANGE_CURRENT_TIME:
      return { ...state, changeCurrentTime: action.data };
    case CHANGE_CYCLE_MODE:
      let len = CYCLE_MODE_LIST.length;
      let cycleMode = state.cycleMode + 1;
      cycleMode = cycleMode >= len ? 0 : cycleMode;
      return { ...state, cycleMode: cycleMode };
    case CHANGE_MUTE_STATE:
      return { ...state, muteState: !state.muteState };
    default:
      return state;
  }
};

export default reducer;
