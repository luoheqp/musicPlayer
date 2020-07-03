import React, { useEffect, useState, useRef } from "react";
import { LyricGuyContent, LyricBox, LyricItem } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { handleSetLyricForThisSong } from "@r/player/action";
// import { throttle } from "@/utils";

const LyricGuy = ({ songId, clickLyric }) => {
  const dispatch = useDispatch();

  const currentTime = useSelector(({ player }) => player.currentTime);
  const lyricForThisSong = useSelector(({ player }) => player.lyricForThisSong);

  // 歌词自然移动相关 config
  const [savedCurrentTime, setSavedCurrentTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lyricMovePos, setLyricMovePos] = useState(0);
  const [lyricMovePosRecord, setLyricMovePosRecord] = useState([]);

  // 歌词 touch 移动相关 config
  const [isTouch, setIsTouch] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchPos, setTouchPos] = useState(0);
  const [touchOffset, setTouchOffset] = useState(0);

  const lyricRef = useRef();
  const activeLyricRef = useRef();

  const handleClickContent = () => {
    clickLyric && clickLyric();
  };

  const handleTouchStart = (e) => {
    setIsTouch(true);
    setTouchStart(e.touches[0].pageY);
  };

  const handleTouchMove = (e) => {
    let touchNow = e.touches[0].pageY; // 在页面上点击的位置
    let offset = touchNow - touchStart; // 计算拖动偏移

    setTouchOffset(offset);
  };

  const handleTouchEnd = (e) => {
    // 重置状态
    setIsTouch(false);
    setTouchOffset(0);
  };

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
  }, [
    activeIndex,
    currentTime,
    lyricForThisSong,
    lyricMovePosRecord,
    savedCurrentTime,
  ]);

  // 歌词移动逻辑
  useEffect(() => {
    setActiveIndex(lyricMovePosRecord.length);

    if (isTouch) return;

    let movePos = lyricMovePosRecord.reduce((pre, cur) => pre + cur, 0);
    setLyricMovePos(lyricRef.current.offsetHeight / 2 - movePos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lyricMovePosRecord, lyricRef.current && lyricRef.current.offsetHeight]);

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
    <LyricGuyContent
      ref={lyricRef}
      onClick={handleClickContent}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mask"></div>
      <LyricBox pos={lyricMovePos + touchOffset}>
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
