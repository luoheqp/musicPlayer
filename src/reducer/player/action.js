import { splitLyric } from "@/utils";
import { Song as SongApi } from "@/server/apis";

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
import { balanceLyricTime } from "../../utils";

export const handleSetMediaPlayNow = (data) => async (dispatch) => {
  const songData = await SongApi.getSongUrl(data.id);
  data.url = songData.url;

  dispatch({
    type: SET_MEDIA_PLAY_NOW,
    data: data,
  });
};

export const handleSetMediaDuration = (data) => ({
  type: SET_MEDIA_DURATION,
  data: data,
});

export const handleSetMediaSource = (data) => ({
  type: SET_MEDIA_SOURCE,
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

export const handleChangePlayState = (data) => ({
  type: CHANGE_PLAY_STATE,
  data: data,
});

export const handleChangeMediaCycleMode = () => ({
  type: CHANGE_CYCLE_MODE,
});

export const handleChangeMediaMuteState = () => ({
  type: CHANGE_MUTE_STATE,
});

export const handleSetLyricForThisSong = (id) => async (dispatch) => {
  try {
    let {
      lrc: { lyric = "" },
    } = await SongApi.getSongLyric(id);

    lyric = lyric.split("\n").map((item) => {
      return splitLyric(item);
    });

    // 过滤空内容 & 前置时间处理
    lyric = lyric.filter((item) => item.content);
    lyric = balanceLyricTime(lyric);

    dispatch({
      type: SET_LYRIC_FOR_THIS_SONG,
      data: lyric,
    });
  } catch (e) {
    dispatch({
      type: SET_LYRIC_FOR_THIS_SONG,
      data: [],
    });
  }
};
