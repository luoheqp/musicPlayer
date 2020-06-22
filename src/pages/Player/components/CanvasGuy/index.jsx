import React, { useState, useEffect, useCallback, useRef } from "react";
import { CanvasGuyContent } from "./style";
import { useSelector } from "react-redux";

const CanvasGuy = (props) => {
  const source = useSelector(({ player }) => player.source);
  const mediaPlayNow = useSelector(({ player }) => player.mediaPlayNow);

  const [audioCtx, setAudioCtx] = useState(undefined);
  const [analyser, setAnalyser] = useState(undefined);
  const [grd, setGrad] = useState(undefined);
  const [grd2, setGrad2] = useState(undefined);

  const canvasRef = useRef();

  const handleAudioAnimation = (ctx, analyser) => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(dataArray);

    ctx.beginPath();
    for (let i = 0; i < 200; i++) {
      let value = dataArray[6 * i];
      ctx.fillStyle = grd;
      ctx.fillRect(i * 5, 300, 2, -value + 1);
      ctx.fillRect(i * 5, 280 - value, 2, 0);
      ctx.fillStyle = grd2;
      ctx.fillRect(i * 5, 300, 2, value + 1);
      ctx.fillRect(i * 5, 320 + value, 2, 0);
    }

    requestAnimationFrame(handleAudioAnimation(ctx, analyser));
  };

  const handleInitAudioContent = useCallback(() => {
    // 创建 AnalyserNode 节点
    let analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    setAnalyser(analyser);

    // 链接节点
    let audioSource = audioCtx.createMediaElementSource(source);
    audioSource.connect(analyser);
    audioSource.connect(audioCtx.destination);

    let ctx = canvasRef.current.getContext("2d");
    ctx.lineWidth = 2;
    let grd = ctx.createLinearGradient(0, 0, 600, 0);
    grd.addColorStop(0, "#00d0ff");
    grd.addColorStop(1, "#eee");

    setGrad(grd);

    let grd2 = ctx.createLinearGradient(0, 0, 600, 0);
    grd2.addColorStop(0, "#fff");
    grd2.addColorStop(1, "#e720ee");

    setGrad2(grd2);

    handleAudioAnimation(ctx, analyser);
  }, [audioCtx, source]);

  useEffect(() => {
    if (audioCtx && source) {
      handleInitAudioContent();
    }
  }, [audioCtx, source, handleInitAudioContent]);

  useEffect(() => {
    if (mediaPlayNow) {
      console.log("object");
      let audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      setAudioCtx(audioContext);
    }
  }, [mediaPlayNow]);

  return (
    <CanvasGuyContent>
      <canvas ref={canvasRef}></canvas>
    </CanvasGuyContent>
  );
};

export default CanvasGuy;
