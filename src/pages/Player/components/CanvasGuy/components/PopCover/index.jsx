import React, { useEffect, useRef } from "react";
import { PopCoverContent } from "./style";
import anime from "animejs";
import { throttle } from "@/utils";

const RANGE_BASE = 10;

const PopCover = ({ bg, range }) => {
  const coverRef = useRef();

  const coverAnime = () => {
    let calcRange = range > RANGE_BASE ? RANGE_BASE : range;

    console.log((0.2 * calcRange) / RANGE_BASE);

    anime.remove(".cover");

    anime({
      targets: ".cover",
      scale: 1 + (0.2 * calcRange) / RANGE_BASE,
    });
  };

  useEffect(() => {
    coverAnime();
  }, [range]);

  return (
    <PopCoverContent bg={bg}>
      <div className="cover" ref={coverRef}></div>
    </PopCoverContent>
  );
};

export default PopCover;
