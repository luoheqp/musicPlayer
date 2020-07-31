import React, { useState, useEffect, useRef } from "react";
import { PlaygroundContent } from "./style";
import Scroll from "@/components/Scroll";

const Playground = (props) => {
  return (
    <PlaygroundContent>
      <Scroll
        bounceTime={500}
        pullDownRefresh={{
          threshold: 70,
          stop: 1,
        }}
      ></Scroll>
    </PlaygroundContent>
  );
};

export default Playground;
