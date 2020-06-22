import React, { useState, useEffect, useCallback, useRef } from "react";
import { CanvasGuyContent } from "./style";
import { useSelector } from "react-redux";

const CanvasGuy = (props) => {
  const LINE_CYCLE_COUNT = 200;

  const source = useSelector(({ player }) => player.source);
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  const [audioContext, setAudioContext] = useState();

  const outerBoxRef = useRef();
  const canvasRef = useRef();

  const handleAudioAnimation = (ctx, analyser) => {
    console.log("object");
    const { current } = canvasRef;

    ctx.clearRect(0, 0, current.width, current.height);

    let dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(dataArray);

    ctx.save();
    ctx.beginPath();
    ctx.translate(current.offsetWidth / 2, current.offsetHeight / 2);
    for (let i = 0; i < LINE_CYCLE_COUNT; i++) {
      ctx.rotate((i * Math.PI) / LINE_CYCLE_COUNT);
      let value = dataArray[6 * i];
      ctx.fillStyle = "#333";
      ctx.fillRect(0, 100, 2, value / 10);
    }

    ctx.restore();

    requestAnimationFrame(() => handleAudioAnimation(ctx, analyser));
  };

  const handleInitAudioContext = (audioCtx) => {
    // 创建 AnalyserNode 节点
    let analyser = audioCtx.createAnalyser();

    // 链接节点
    let audioSource = audioCtx.createMediaElementSource(source);
    audioSource.connect(analyser);
    audioSource.connect(audioCtx.destination);

    const { current } = canvasRef;
    let ctx = current.getContext("2d");
    ctx.lineWidth = 2;

    handleAudioAnimation(ctx, analyser);
  };

  const handleWindowResize = () => {
    const { current } = outerBoxRef;
    canvasRef.current.width = current.offsetWidth;
    canvasRef.current.height = current.offsetHeight;
  };

  useEffect(() => {
    if (mediaPlayNow.name && source && !audioContext) {
      let audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      setAudioContext(audioContext);
      handleInitAudioContext(audioContext);
    }
  }, [mediaPlayNow, source, audioContext]);

  useEffect(() => {
    handleWindowResize();
    window.onresize = handleWindowResize();
  }, []);

  return (
    <CanvasGuyContent ref={outerBoxRef}>
      <canvas ref={canvasRef}></canvas>
    </CanvasGuyContent>
  );
};

export default CanvasGuy;
