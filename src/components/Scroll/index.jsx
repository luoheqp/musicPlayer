import React, { useRef, useEffect, useState } from "react";
import { ScrollContent } from "./style";

// components
import BScroll from "@better-scroll/core";
import PullDown from "@better-scroll/pull-down";

// BScroll 插件导入
BScroll.use(PullDown);

const Scroll = (props) => {
  const { pullingDown } = props;

  const scrollRef = useRef();

  const [bsInstance, setBsInstance] = useState();

  useEffect(() => {
    if (scrollRef.current) {
      // 初始化 better-scroll
      const bs = new BScroll(scrollRef.current, { ...props });

      setBsInstance(bs);
    }
  }, [scrollRef]);

  // 下拉事件绑定
  useEffect(() => {
    if (pullingDown && bsInstance) {
      bsInstance.on("pullingDown", pullingDown);
    }
  }, [pullingDown, bsInstance]);

  return (
    <ScrollContent ref={scrollRef}>
      <div className="scroll">
        <div class="pulldown-wrapper">
          <div>
            <span>Pull Down and refresh</span>
          </div>
        </div>
        {new Array(100).fill("").map((item, index) => (
          <p key={index}>1</p>
        ))}
      </div>
    </ScrollContent>
  );
};

export default Scroll;
