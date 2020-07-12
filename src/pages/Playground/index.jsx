import React, { useState, useEffect, useRef } from "react";
import { PlaygroundContent } from "./style";

const Playground = (props) => {
  const mainAudioRef = useRef();
  const subAudioRef = useRef();

  const [isMainAudioReady, setIsMainAudioReady] = useState(false);
  const [isSubAudioReady, setIsSubAudioReady] = useState(false);
  const [subAudioSrc, setSubAudioSrc] = useState("");

  const handlePlay = () => {
    mainAudioRef.current.currentTime = 0;
    mainAudioRef.current.play();
    subAudioRef.current.currentTime = 0;
    subAudioRef.current.play();
  };

  const handleMainAudioReady = () => {
    setIsMainAudioReady(true);
  };

  const handleSubAudioReady = () => {
    setIsSubAudioReady(true);
  };

  const handleChangeSubAudio = (src) => {
    setSubAudioSrc(src);
  };

  const handleLoadStart = () => {
    setIsSubAudioReady(false);
  };

  useEffect(() => {
    if (isMainAudioReady && isSubAudioReady) {
      handlePlay();
    }
  }, [isMainAudioReady, isSubAudioReady]);

  return (
    <PlaygroundContent>
      <p>main audio</p>
      <br />
      <audio
        src="./music/4円 - アイロニ.mp3"
        onCanPlay={handleMainAudioReady}
        ref={mainAudioRef}
        controls
      ></audio>
      <br />
      <p>sub audio</p>
      <br />
      <audio
        src={subAudioSrc}
        onCanPlay={handleSubAudioReady}
        onLoadStart={handleLoadStart}
        ref={subAudioRef}
        controls
      ></audio>
      <br />

      <br />
      <ul>
        <li
          onClick={() =>
            handleChangeSubAudio(
              "./music/AkimotoHitomi - ミカヅキ piano ver.（Cover さユり）.mp3"
            )
          }
        >
          AkimotoHitomi
        </li>
        <li
          onClick={() =>
            handleChangeSubAudio(
              "./music/Akie秋绘 - 小夜子（Cover 初音ミク-みきとP）.mp3"
            )
          }
        >
          Akie秋绘
        </li>
        <li
          onClick={() =>
            handleChangeSubAudio(
              "./music/amazarashi - 季節は次々死んでいく(2).mp3"
            )
          }
        >
          amazarashi
        </li>
      </ul>
    </PlaygroundContent>
  );
};

export default Playground;
