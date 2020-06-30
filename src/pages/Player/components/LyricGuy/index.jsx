import React, { useEffect, useState, useRef } from "react";
import { LyricGuyContent, LyricBox, LyricItem } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { handleSetLyricForThisSong } from "@r/player/action";

const LyricGuy = ({ songId }) => {
  const dispatch = useDispatch();

  const currentTime = useSelector(({ player }) => player.currentTime);
  const lyricForThisSong = useSelector(({ player }) => player.lyricForThisSong);

  // 歌词移动相关 config
  const [savedCurrentTime, setSavedCurrentTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lyricMovePos, setLyricMovePos] = useState(0);
  const [lyricMovePosRecord, setLyricMovePosRecord] = useState([]);

  const lyricRef = useRef();
  const activeLyricRef = useRef();

  // 进行歌词移动
  useEffect(() => {
    // 不存在歌词 & 歌词已到最后
    if (!lyricForThisSong.length || !lyricForThisSong[activeIndex + 1]) {
      return;
    }

    // 进度条后退
    if (savedCurrentTime > currentTime) {
      setSavedCurrentTime(currentTime);
      let mark = 0;
      let moveRecord = [];

      lyricForThisSong.forEach((item) => {
        if (item.time < currentTime) {
          mark++;
        }
      });

      // 重置步数记录
      moveRecord = lyricMovePosRecord.slice(0, mark - 1);
      setLyricMovePosRecord(moveRecord);
      return;
    }

    // 当前播放时间是否比下一句歌词的时间点大
    if (currentTime > lyricForThisSong[activeIndex + 1].time) {
      const {
        current: { offsetHeight },
      } = activeLyricRef;
      setSavedCurrentTime(currentTime);

      if (activeIndex + 1 > lyricMovePosRecord.length) {
        setLyricMovePosRecord([...lyricMovePosRecord, offsetHeight + 20]);
      }
    }
  }, [activeIndex, currentTime, lyricForThisSong]);

  // 歌词移动逻辑
  useEffect(() => {
    let movePos = lyricMovePosRecord.reduce((pre, cur) => pre + cur, 0);
    setLyricMovePos(lyricRef.current.offsetHeight / 2 - movePos);
    setActiveIndex(lyricMovePosRecord.length);
  }, [lyricMovePosRecord]);

  // 获取歌词信息
  useEffect(() => {
    if (songId) {
      dispatch(handleSetLyricForThisSong(songId));
    }
  }, [dispatch, songId]);

  // 初始化位置
  useEffect(() => {
    setLyricMovePosRecord([]);
  }, [lyricForThisSong]);

  return (
    <LyricGuyContent ref={lyricRef}>
      <div className="mask"></div>
      <LyricBox pos={lyricMovePos}>
        {lyricForThisSong.map(({ content }, index) =>
          activeIndex === index ? (
            <LyricItem key={index} className="active" ref={activeLyricRef}>
              {content}
            </LyricItem>
          ) : (
            <LyricItem key={index}>{content}</LyricItem>
          )
        )}
      </LyricBox>
    </LyricGuyContent>
  );
};

export default LyricGuy;
