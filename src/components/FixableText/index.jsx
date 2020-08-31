import React, { useEffect, useCallback, useState, useRef } from "react";
import { FixableTextContent } from "./style";

const FixableText = (props) => {
  const { text, max, min, line } = props;

  const [fontSize, setFontSize] = useState(16);

  const textArea = useRef();
  const maxWidth = useRef();
  const maxHeight = useRef();

  const handleCalc = useCallback(() => {
    if (!text) return;

    // 创建节点获取文字长度
    const textContent = document.createElement("div");
    textContent.innerText = text;
    textContent.style.cssText =
      "position: absolute; opacity: 0; font-size: 16px; z-index: -100";

    document.body.appendChild(textContent);

    // 添加容错
    const textWidth = textContent.offsetWidth + 3;
    const textHeight = textContent.offsetHeight + 3;

    // 计算和容器的长度比例 设置合理字体大小
    let size = (maxWidth.current / textWidth) * 16;
    size = Math.max(size, min);
    size = Math.min(size, max);

    // 计算和容器的宽度比例 设置合理字体大小
    // if (size * 2 > textHeight) {
    // }
    setFontSize(size);

    document.body.removeChild(textContent);
  }, []);

  useEffect(() => {
    maxWidth.current = textArea.current.offsetWidth;
    maxHeight.current = textArea.current.offsetHeight;

    handleCalc();
  }, []);

  return (
    <FixableTextContent ref={textArea} fontSize={fontSize} line={line}>
      {props.text}
    </FixableTextContent>
  );
};

export default FixableText;
