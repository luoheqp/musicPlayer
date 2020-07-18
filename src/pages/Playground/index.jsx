import React, { useState, useEffect, useRef } from "react";
import { PlaygroundContent } from "./style";

const Playground = (props) => {
  const mainAudioRef = useRef();
  const subAudioRef = useRef();

  useEffect(() => {
    
  }, []);

  return (
    <PlaygroundContent>
      <p>main audio</p>
      <br />
      <audio
        src="./music/4円 - アイロニ.mp3"
        ref={mainAudioRef}
        controls
      ></audio>
    </PlaygroundContent>
  );
};

export default Playground;
