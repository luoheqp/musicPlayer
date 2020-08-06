import React, { useEffect, useRef, useState } from "react";
import useInterval from "@/hooks/useInterval";
import anime from "animejs";

import { CasualContent, TheBtn } from "./style.jsx";

let VOICE_FREQUENCY = [196, 220, 246, 261, 293, 329, 349, 392];

const Casual = (props) => {
  const audioCtx = useRef();
  const theBtnRef = useRef();

  const [isTouching, setIsTouching] = useState(false);

  const start = useRef(0);
  const direction = useRef(1);
  const handleResetConfig = () => {
    setIsTouching(false);
    start.current = 0;
    direction.current = 1;
  };

  // 触发声音
  const handleMakeVoice = (frequency) => {
    let oscillator = audioCtx.current.createOscillator();
    let gainNode = audioCtx.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.current.destination);

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    oscillator.start(audioCtx.current.currentTime);
    // 1秒内声音慢慢降低，是个不错的停止声音的方法
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      audioCtx.current.currentTime + 1
    );
    // 1秒后完全停止声音
    oscillator.stop(audioCtx.current.currentTime + 1);
  };

  // 获取随机的歌曲
  const handleGetRandomSong = () => {
    anime({
      targets: theBtnRef.current,
      scale: 10,
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 500,
    });
  };

  // 音频播放 interval
  useInterval(
    () => {
      var frequency = VOICE_FREQUENCY[start.current];
      if (!frequency) {
        handleResetConfig();
        handleGetRandomSong();
        return;
      }
      start.current = start.current + direction.current;

      anime({
        targets: theBtnRef.current,
        scale: 1.2,
        direction: "alternate",
        easing: "easeInOutQuad",
        duration: 100,
      });

      handleMakeVoice(frequency);
    },
    isTouching ? 300 : null
  );

  // touch start
  const handleTouchStart = () => {
    setIsTouching(true);
  };

  // touch end
  const handleTouchEnd = () => {
    handleResetConfig();
  };

  useEffect(() => {
    audioCtx.current = new AudioContext();
  }, []);

  return (
    <CasualContent>
      <TheBtn
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={theBtnRef}
      >
        <i className="iconfont icon-music-line"></i>
      </TheBtn>
    </CasualContent>
  );
};

export default Casual;
