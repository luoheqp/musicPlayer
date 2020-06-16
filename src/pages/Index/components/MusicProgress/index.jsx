import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MusicProgressContent } from "./style";

const MusicProgress = (props) => {
  const duration = useSelector(({ player }) => player.duration);
  const currentTime = useSelector(({ player }) => player.currentTime);

  const [progress, setProgress] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseDownPos, setMouseDownPos] = useState(0);

  const handleMouseDownInProgress = ({ clientX }) => {
    setMouseDownPos(clientX);
    setIsMouseDown(true);
  };

  const handleMouseMoveInProgress = ({ clientX }) => {
    if (!isMouseDown) {
      return;
    }
    console.log(clientX - mouseDownPos);
  };

  const handleMouseUpInProgress = (e) => {
    setIsMouseDown(false);
  };

  useEffect(() => {
    // TODO: NaN 问题 ?
    let progress = Number((currentTime / duration) * 100).toFixed();
    setProgress(isNaN(progress) ? 0 : progress);
  }, [currentTime, duration]);

  return (
    <MusicProgressContent
      progress={progress}
      onMouseDown={handleMouseDownInProgress}
      onMouseMove={handleMouseMoveInProgress}
      onMouseUp={handleMouseUpInProgress}
    >
      <div className="move-point"></div>
    </MusicProgressContent>
  );
};

export default MusicProgress;
