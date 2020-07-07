import React, { useEffect, useRef, useCallback } from "react";
import { PopCoverContent } from "./style";
import anime from "animejs";
import { useState } from "react";
import { throttle } from "@/utils";

const RANGE_BASE = 100;

const PopCover = ({ bg, range }) => {
  const coverRef = useRef();

  const [calcRange, setCalcRange] = useState(0);

  const handleDoAnime = useCallback(() => {
    let data = range - 150;
    data = data > RANGE_BASE ? RANGE_BASE : data;
    setCalcRange(1 + (0.4 * data) / RANGE_BASE);
  }, [range]);

  useEffect(() => {
    handleDoAnime();
  }, [handleDoAnime, range]);

  return (
    <PopCoverContent bg={bg} range={calcRange}>
      <div className="cover" ref={coverRef}></div>
    </PopCoverContent>
  );
};

export default PopCover;
