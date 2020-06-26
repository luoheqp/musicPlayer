import React, { useEffect, useState } from "react";
import { LyricGuyContent, LyricWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { handleSetLyricForThisSong } from "@r/player/action";

const LyricGuy = (props) => {
  const dispatch = useDispatch();

  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);
  const currentTime = useSelector(({ player }) => player.currentTime);
  const lyricForThisSong = useSelector(({ player }) => player.lyricForThisSong);

  const [activeIndex, setActiveIndex] = useState(0);

  // 歌词节点变更
  useEffect(() => {
    if (currentTime > lyricForThisSong[activeIndex].time) {
      setActiveIndex(activeIndex + 1);
    }
  }, [activeIndex, currentTime, lyricForThisSong]);

  // 获取歌词信息
  useEffect(() => {
    if (mediaPlayNow.id) {
      dispatch(handleSetLyricForThisSong(mediaPlayNow.id));
    }
  }, [dispatch, mediaPlayNow]);

  return (
    <LyricGuyContent>
      <LyricWrapper>
        {lyricForThisSong.map(({ time, content }, index) => (
          <p key={index} className="lyric-item">
            {content}
          </p>
        ))}
      </LyricWrapper>
    </LyricGuyContent>
  );
};

export default LyricGuy;
