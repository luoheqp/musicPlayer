import React, { useState, useEffect, useCallback } from "react";
import { CanvasGuyContent } from "./style";
import { useSelector } from "react-redux";

const CanvasGuy = (props) => {
  const source = useSelector(({ player }) => player.source);

  const [audioCtx, setAudioCtx] = useState(undefined);

  const handleInitAudioContent = useCallback(() => {
    // 创建 AnalyserNode 节点
    let analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    // 链接节点
    let audioSource = audioCtx.createMediaElementSource(source);
    audioSource.connect(analyser);
    audioSource.connect(audioCtx.destination);

    // AnalyserNode 数据解析
    let dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(dataArray);

    console.log(dataArray)
  }, [audioCtx, source]);

  useEffect(() => {
    if (audioCtx && source) {
      console.log(audioCtx, source)
      handleInitAudioContent();
    }
  }, [audioCtx, source, handleInitAudioContent]);

  useEffect(() => {
    let audioContext = new (window.AudioContext || window.webkitAudioContext)();
    setAudioCtx(audioContext);
  }, []);

  return (
    <CanvasGuyContent>
      <span>canvas </span>
    </CanvasGuyContent>
  );
};

export default CanvasGuy;
