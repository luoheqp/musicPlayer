import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { MusicProgressContent, MovePoint } from "./style";

const MusicProgress = (props) => {
  const duration = useSelector(({ player }) => player.duration);
  const currentTime = useSelector(({ player }) => player.currentTime);

  const [progress, setProgress] = useState(0);
  const [startPosX, setStartPosX] = useState(0);
  const [isDraging, setIsDraging] = useState(false);

  const progressBar = useRef();

  // 计算进度 同步修改进度条
  const handleChangeAudioProgress = ({ pageX }) => {
    const { offsetLeft, clientWidth } = progressBar.current;
    let offsetX = pageX - startPosX - offsetLeft;
    let progress = offsetX / clientWidth;
    progress = progress > 1 ? 1 : progress < 0 ? 0 : progress;
    setProgress(progress * 100);
  };

  // 鼠标按下事件
  const handleMouseDownInProgress = ({ pageX }) => {
    const { offsetLeft, clientWidth } = progressBar.current;
    let startPosX = pageX - offsetLeft;
    setProgress(startPosX / clientWidth);
    setIsDraging(true);
    setStartPosX(startPosX);

    document.addEventListener("mousemove", handleChangeAudioProgress);
    document.addEventListener("mouseup", () => {
      // 重置状态并清除事件
      setIsDraging(false);
      document.removeEventListener("mousemove", handleChangeAudioProgress);
    });
  };

  useEffect(() => {
    // TODO: NaN 问题 ?
    let progress = Number((currentTime / duration) * 100).toFixed();
    setProgress(isNaN(progress) ? 0 : progress);
  }, [currentTime, duration]);

  return (
    <>
      <MusicProgressContent
        progress={progress}
        onMouseDown={handleMouseDownInProgress}
        isDraging={isDraging}
        ref={progressBar}
      >
        <MovePoint progress={progress}></MovePoint>
      </MusicProgressContent>
    </>
  );
};

export default MusicProgress;
