import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CYCLE_MODE_LIST } from "@/config/playerConfig";
import {
  handleSetMediaPlayNow,
  handleChangePlayState,
  handleChangeMediaCycleMode,
  handleChangeMediaMuteState,
} from "@r/player/action";
import { handleSetPlayingMusicList } from "@r/common";
import {
  PlayerControllerContent,
  PlayerStateControl,
  MusicProgressContent,
  PlayerCycleControl,
} from "./style";

// components
import MusicProgress from "@/pages/Enter/components/MusicProgress";

const PlayerController = () => {
  const dispatch = useDispatch();

  const listData = useSelector(({ common }) => common.playingMusicList);
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);
  const cycleMode = useSelector(({ player }) => player.cycleMode);
  const muteState = useSelector(({ player }) => player.muteState);
  const playState = useSelector(({ player }) => player.playState);

  // 更改当前歌曲 => 上一首 / 下一首
  const handleChangeCurrentSong = useCallback(
    (difference) => {
      let { listPos = 0 } = mediaPlayNow;

      let len = listData.length;
      listPos += difference;

      if (listPos < 0) {
        listPos = len - 1;
      }

      if (listPos >= len) {
        listPos = 0;
      }

      dispatch(handleChangePlayState(true));
      dispatch(handleSetMediaPlayNow(listData[listPos]));
    },
    [dispatch, listData, mediaPlayNow]
  );

  // 更改当前播放状态 => 暂停 / 开始
  const togglePlayerState = () => {
    dispatch(
      handleChangePlayState(playState === "playing" ? "ready" : "playing")
    );
  };

  // 切换播放循环状态
  const handleChangePlayerCycleState = () => {
    dispatch(handleChangeMediaCycleMode());
  };

  const handleChangePlayerMuteState = () => {
    dispatch(handleChangeMediaMuteState());
  };

  useEffect(() => {
    dispatch(handleSetPlayingMusicList());
  }, [dispatch]);

  return (
    <PlayerControllerContent>
      <div className="control-area">
        <PlayerCycleControl
          value={CYCLE_MODE_LIST[cycleMode]}
          onClick={handleChangePlayerCycleState}
        />
        <PlayerStateControl>
          <i
            className="iconfont icon-shangyishou"
            onClick={() => handleChangeCurrentSong(-1)}
          />
          <i
            className={`iconfont ${
              playState === "playing" ? "icon-zanting_o" : "icon-bofang_o"
            }`}
            onClick={togglePlayerState}
          />
          <i
            className="iconfont icon-xiayishou"
            onClick={() => handleChangeCurrentSong(1)}
          />
        </PlayerStateControl>
        <PlayerCycleControl
          value={muteState ? "恢复" : "静音"}
          onClick={handleChangePlayerMuteState}
        />
      </div>
      <MusicProgressContent>
        <MusicProgress />
      </MusicProgressContent>
    </PlayerControllerContent>
  );
};

export default PlayerController;
